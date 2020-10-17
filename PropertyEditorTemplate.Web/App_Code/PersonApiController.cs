using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Umbraco.Web.WebApi;
using Umbraco.Web.Editors;
using Umbraco.Core.Persistence;
using Umbraco.Core.Scoping;


namespace My.Controller
{
    [Umbraco.Web.Mvc.PluginController("My")]
    public class PersonApiController : UmbracoAuthorizedJsonController
    {
        private readonly IScopeProvider scopeProvider;
        public PersonApiController(IScopeProvider scopeProvider)
        {
            this.scopeProvider = scopeProvider;
        }
        public IEnumerable<Person> GetAll()
        {
            using (var scope = scopeProvider.CreateScope(autoComplete: true))
            {
                // TODO FIX
                //var sql = scope.SqlContext.Sql().Select("*").From("people");
                //return scope.Database.Fetch<Person>(sql);  // this fails, maybe bcause of sdf limitations? 

                return new List<Person>();
            }
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Town { get; set; }
        public string Country { get; set; }
    }
}