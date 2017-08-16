using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Routing;

namespace Billingham.Example.Api.Controllers
{
    public class MessagesCache
    {
        private int nextId = 1;
        private List<Message> messages = new List<Message>(100);

        public NewMessageResponse AddMessage(NewMessage newMessage)
        {
            var toAdd = new Message
            {
                Body = newMessage.Body,
                Id = nextId,
                Name = newMessage.Name,
                TimeStamp = DateTime.UtcNow
            };
            messages.Add(toAdd);
            nextId++;
            return new NewMessageResponse(newMessage.Id,toAdd.TimeStamp);
        }

        public IEnumerable<Message> GetAllMessages()
        {
            return messages;
        }
        

    }

    public class NewMessageResponse
    {
        

        public NewMessageResponse(string id, DateTime timeStamp)
        {
            Id = id;
            TimeStamp = timeStamp;
        }

        public string Id { get; set; }
        public DateTime TimeStamp { get; set; }
    }

    public class Message
    {
        public string Name { get; set; }
        public string Body { get; set; }
        public DateTime TimeStamp { get; set; }
        public int Id { get; set; }

    }

    public class NewMessage
    {
        public string Name { get; set; }
        public string Body { get; set; }
        public DateTime TimeStamp { get; set; }
        public string Id { get; set; }
    }
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {
        private static MessagesCache messagesCache = new MessagesCache();
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetMessages()
        {
            return Ok(messagesCache.GetAllMessages());
        }
        [HttpPost]
        [Route("")]
        public IHttpActionResult AddMessage(NewMessage message)
        {
            var result = messagesCache.AddMessage(message);
            return Ok(result);
        }
    }
}
