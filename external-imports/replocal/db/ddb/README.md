<div style="text-align:center">

Logo (ddb-js)

NPM Version | Downloads | Stars | Coverage | Discord | License

<sub><em>
ddb-js is an open-source community project and NOT affiliated with AWS or Amazon.
</em></sub>

</div>

---


## Features

- Supports SST 3.0+
- 15 kb Raw File Size
- <5 kB GZipped and Minified
- No support for Legacy Parameters
- Tree Shakable with 0 Dependencies
- Readable and composable code

Alternatives:
- https://github.com/blazejkustra/dynamode [56 stars / 2k downloads / 201 kB]
- https://github.com/dynamoose/dynamoose [2.2k+ stars / 160k downloads / 393 kB]
- https:/github.com/baseprime/dynamodb
- https://github.com/ryanfitz/vogels
- https://github.com/shiftcode/dynamo-easy
- LOCAL: https://github.com/99x/serverless-dynamodb-local
- ADDON: https://github.com/jeremydaly/dynamodb-toolbox



## Documentation

Read more and compile from
- https://github.com/alexdebrie/awesome-dynamodb
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- BRANCHES.md -> stable, v1-wip, v2-rc, v2-beta, v2-wip

Visit https://adityaborkar.com/ddb-js/docs to view the full documentation.


## Community

The community can be found on GitHub Discussions where you can ask questions, voice ideas, and share your projects with other people. To chat with other community members you can join the Discord server.

Do note that our Code of Conduct applies to all community channels. Users are highly encouraged to read and adhere to them to avoid repercussions.


## Contributing

Contributions to `ddb-js` are welcome and highly appreciated. However, before you jump right into it, we would like you to review our Contribution Guidelines to make sure you have a smooth experience contributing to `ddb-js`.

## Contributors

<!-- We would like to thank all the contributors who helped make `ddb-js` better -->

- Aditya Borkar (TWITTER)


---

### Supported Operations

- PutItemCommand
- GetItemCommand
- UpdateItemCommand
- DeleteItemCommand
- BatchGetItemCommand
- BatchWriteItemCommand
- QueryCommand
- ScanCommand
- TransactGetItemsCommand
- TransactWriteItemsCommand
- ExecuteStatementCommand
- ExecuteTransactionCommand


### Unsupported Operations

- [Tables]:
   - ImportTableCommand
   - ListTablesCommand
   - CreateTableCommand
   - UpdateTableCommand
   - DeleteTableCommand
   - DescribeTableCommand
- [Kinesis Streaming]:
   - UpdateKinesisStreamingDestinationCommand
   - EnableKinesisStreamingDestinationCommand
   - DisableKinesisStreamingDestinationCommand
   - DescribeKinesisStreamingDestinationCommand
- [Global Tables]:
   - CreateGlobalTableCommand
   - ListGlobalTablesCommand
   - UpdateGlobalTableCommand
   - DescribeGlobalTableCommand
   - UpdateGlobalTableSettingsCommand
   - DescribeGlobalTableSettingsCommand
- [Tables Others]:
   - DescribeLimitsCommand
   - DescribeEndpointsCommand
   - DescribeTimeToLiveCommand
   - UpdateTimeToLiveCommand
   - UpdateTableReplicaAutoScalingCommand
   - DescribeTableReplicaAutoScalingCommand
   - [Resource Policy]:
   - PutResourcePolicyCommand
   - GetResourcePolicyCommand
   - DeleteResourcePolicyCommand
- [Backups]:
   - ListBackupsCommand
   - CreateBackupCommand
   - DeleteBackupCommand
   - DescribeBackupCommand
   - RestoreTableFromBackupCommand
   - RestoreTableToPointInTimeCommand
   - DescribeContinuousBackupsCommand
   - UpdateContinuousBackupsCommand
- [Tags]:
   - ListTagsOfResourceCommand
   - TagResourceCommand
   - UntagResourceCommand
- [Insights]:
   - ListContributorInsightsCommand
   - UpdateContributorInsightsCommand
   - DescribeContributorInsightsCommand
- [Import/Export]:
   - ListImportsCommand
   - DescribeImportCommand
   - ListExportsCommand
   - DescribeExportCommand
   - ExportTableToPointInTimeCommand

---


## TODO:

- Build Workflow
- Publish Package
- Design and write documentation with diagrams and intuitive examples.
- Make a Documentation Page with RCUs and WCUs for each operation and case:
   `https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations`.
- Attribute Compression (because = "It is considered best practice to keep your attribute names as short as possible. This helps reduce read request units consumed, as attribute names are included in metering of storage and throughput usage.")


## Proposals:

- Pretty return errors
- Support for pipeline operators

## TODO: PUT OPERATION
- Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty.
- Invalid Requests with empty values will be rejected with a ValidationException exception.
- COMBINE `ReturnValues` AND `ReturnValuesOnConditionCheckFailure` PROPERLY AFTER TESTING.
- Operation Error Handling


## Write a blog for:

- Why did I use the current architecture?
- What were the options available and how I benchmarked for both - speed and size and memory.
- About the algorithms - use Design Patterns. They are techniques evolved in the years, tested and proven. Like using closures, unnamed self executing function which prevent global variables, etc...
- Reduce Dependencies as much as possible (only if makes sense)
- Performance Techniques using compiler
- Minifier and GZip

Make use of ‘this’, by passing correct scope using ‘call’ and ‘apply’.
This is particularly useful for writing asynchronous code using callbacks, however it also improves performance because you are not relying on global or closure variables held further up the scope chain. You can get the most out of the scope variable (this) by rewiring it using the special call() and apply() methods that are built into each function. See the example below:

var Person = Object.create({
  init: function(name) {
     this.name = name;
  },
  do: function(callback) {
     callback.apply(this);
  }
});
var john = new Person('john');
john.do(function() {
    alert(this.name);        - 'john'
});

Use ‘switch’ instead of lengthy ‘if-then-else’ statements.

https://calendar.perfplanet.com/2023/
https://webperf.tips/topic/js-optimization


## Documentation:

- Add TSDOCS + Autogenerate Docs from Code (like SST)
- Integrate SST like AI to chatbot
- ADD EXAMPLES
- Add Documentation to class methods that are public:

/**
 * Add a condition to the Put Operation
 *
 * See Docs: {@link https://docs.replocal.com}
 *
 * @param expression Conditional Expression
 *
 * @example
 * ```ts
 * db.tableName.put()
 * ```
 */

/**
 * Add a condition to the Put Operation
 *
 * See Docs: {@link https://docs.replocal.com}
 *
 * @param { Object } props Returning Properties
 * @param { boolean } props.values Return Values
 * @param { boolean } props.consumedCapacity Return RCUs / WCUs
 *
 * @example
 * ```ts
 * db.tableName.put()
 * ```
 */
 