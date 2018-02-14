import React from "react";
import ReactMarkdown from "react-markdown";

import SplitPage from "../SplitPage";
import Example from "../../components/Example";
import MarkdownContent from "../../components/MarkdownContent";

export default () => {
  return (
    <SplitPage>
      <MarkdownContent
        md={`
# Step-By-Step Guide to a Running API

The most basic use case leverages Entity Framework. 
The shortest path to a running API looks like:

- Create a new web app
- Install
- Define models
- Define the DbContext
- Define controllers
- Add Middleware and Services
- Seed the database
- Run Migrations
- Start the app

This page will walk you through the **simplest** use case. More detailed examples can be found in the detailed usage subsections.
`}
      />

      <Example
        md={`### Create A New Web App`}
        code={`
mkdir MyApp
cd MyApp
dotnet new webapi`}
      />
      <Example
        md={`### Install`}
        code={`
dotnet add package JsonApiDotnetCore

- or -

Install-Package JsonApiDotnetCore
`}
      />
      <Example
        md={`
### Define Models
        
Define your domain models such that they implement \`IIdentifiable<TId>\`.
The easiest way to do this is to inherit \`Identifiable\``}
        code={`
public class Person : Identifiable
{ 
    [Attr("name")]
    public string Name { get; set; }
}`}
      />

      <Example
        md={`
### Define DbContext
        
Nothing special here, just an ordinary DbContext`}
        code={`
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
        
    public DbSet<Person> People { get; set; }
}
`}
      />

      <Example
        md={`
### Define Controllers
        
You need to create controllers that inherit from \`JsonApiController<TEntity>\` or \`JsonApiController<TEntity, TId>\`
where \`TEntity\` is the model that inherits from \`Identifiable<TId>\`.`}
        code={`
public class PeopleController : JsonApiController<Person>
{
    public PeopleController(
        IJsonApiContext jsonApiContext,
        IResourceService<Person> resourceService,
        ILoggerFactory loggerFactory) 
    : base(jsonApiContext, resourceService, loggerFactory)
    { }
}
`}
      />

      <Example
        md={`
### Middleware and Services

Finally, add the services by adding the following to your Startup.ConfigureServices:
        `}
        code={`
public IServiceProvider ConfigureServices(IServiceCollection services)
{
    // add the db context like you normally would
    services.AddDbContext<AppDbContext>(options =>
    { // use whatever provider you want, this is just an example
        options.UseNpgsql(GetDbConnectionString());
    }, ServiceLifetime.Transient);

    // add jsonapi dotnet core
    services.AddJsonApi<AppDbContext>();
    // ...
}
`}
      />
      <Example
        md={`
Add the middleware to the Startup.Configure method. Note that under the hood, 
this will call app.UseMvc()
so there is no need to add that as well.
        `}
        code={`
public void Configure(IApplicationBuilder app)
{
    app.UseJsonApi();
}
`}
      />
      <Example
        md={`
### Seeding the Database

One way to seed the database is in your Configure method:
        `}
        code={`
public void Configure(
    IApplicationBuilder app,
    AppDbContext context)
{
    context.Database.EnsureCreated();
    if(context.People.Any() == false) 
    {
        context.People.Add(new Person {
            Name = "John Doe"
        });
        context.SaveChanges();
    }
    // ...
    app.UseJsonApi();
}
`}
      />

      <Example
        md={`### Run Migrations`}
        code={`
dotnet ef migrations add AddPeople
dotnet ef database update
`}
      />
      <Example
        md={`### Start the App`}
        code={`
dotnet run
curl http://localhost:5000/people
`}
      />
    </SplitPage>
  );
};
