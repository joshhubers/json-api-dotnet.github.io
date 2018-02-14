import React from "react";
import SplitPage from "../SplitPage";
import Example from "../../components/Example";
import ContentHeader from "../../components/ContentHeader";
import Content from "../../components/Content";

export default () => {
  return (
    <SplitPage>
      <ContentHeader>Filtering</ContentHeader>
      <Example
        md={`
Resources can be filtered by attributes using the \`filter\` query parameter. 
By default, all attributes are filterable. 
The filtering strategy we have selected, uses the following form.
        `}
        code={`
?filter[attribute]=value
        `}
      />

      <Example
        md={`
For operations other than equality, the query can be prefixed with an operation identifier.
        `}
        code={`
?filter[attribute]=eq:value
?filter[attribute]=lt:value
?filter[attribute]=gt:value
?filter[attribute]=le:value
?filter[attribute]=ge:value
?filter[attribute]=like:value
        `}
      />

      <Example
        md={`
Filters can be combined and will be applied using an AND operator. 
The following are equivalent query forms to get \`articles\` whose \`ordinal\` values
are between 1-100.
        `}
        lang={"http"}
        code={`
GET /api/articles?filter[ordinal]=gt:1,lt:100 HTTP/1.1
Accept: application/vnd.api+json

GET /api/articles?filter[ordinal]=gt:1&filter[ordinal]=lt:100 HTTP/1.1
Accept: application/vnd.api+json
        `}
      />

      <ContentHeader>Custom Filters</ContentHeader>
      <Example
        md={`
You can customize the filter implementation by overriding the method in the 
\`DefaultEntityRepository\`.
        `}
        code={`
public class MyEntityRepository : DefaultEntityRepository<MyEntity>
{
  public MyEntityRepository(
    AppDbContext context,
    ILoggerFactory loggerFactory,
    IJsonApiContext jsonApiContext)
  : base(context, loggerFactory, jsonApiContext)
  { }

  public override IQueryable<TEntity> Filter(IQueryable<TEntity> entities,  FilterQuery filterQuery)
  {
    // use the base filtering method    
    entities = base.Filter(entities, filterQuery);

    // implement custom method
    return ApplyMyCustomFilter(entities, filterQuery);
  }
}
        `}
      />
    </SplitPage>
  );
};