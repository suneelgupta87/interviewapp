window.data = window.data || {};
window.data.LINQ = {
  "Department-wise Maximum Salary using LINQ": {
    "answer": `
    <p>
        To find the highest-paid employee in each department, first group the
        employees by department using <code>GroupBy()</code>, then sort each
        group by salary in descending order and select the first employee.
    </p>

    <p><strong>Employee Class:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Department { get; set; }

    public decimal Salary { get; set; }
}
    </code></pre>

    <p><strong>LINQ Query:</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => g
        .OrderByDescending(e => e.Salary)
        .First());
    </code></pre>

    <p><strong>Alternative (Using Max):</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        MaxSalary = g.Max(e => e.Salary)
    });
    </code></pre>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Group the employees by department using GroupBy(), then use OrderByDescending() with First() or Max() to retrieve the highest salary for each department.
    </div>
    `
},
"Department-wise Maximum Salary using LINQ": {
    "answer": `
    <p>
        To find the highest-paid employee in each department, first group the
        employees by department using <code>GroupBy()</code>, then sort each
        group by salary in descending order and select the first employee.
    </p>

    <p><strong>Employee Class:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Department { get; set; }

    public decimal Salary { get; set; }
}
    </code></pre>

    <p><strong>LINQ Query:</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => g
        .OrderByDescending(e => e.Salary)
        .First());
    </code></pre>

    <p><strong>Alternative (Using Max):</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        MaxSalary = g.Max(e => e.Salary)
    });
    </code></pre>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Group the employees by department using GroupBy(), then use OrderByDescending() with First() or Max() to retrieve the highest salary for each department.
    </div>
    `
},
"Querying Data with LINQ and Performance Optimization": {
    "answer": `
    <p>
        LINQ (Language Integrated Query) provides a type-safe and readable way
        to query data from collections, Entity Framework Core, XML, and other
        data sources. In Entity Framework Core, LINQ queries are translated
        into SQL and executed on the database.
    </p>

    <p><strong>Common LINQ Query Operations:</strong></p>

    <ul>
        <li>Filtering using <code>Where()</code>.</li>
        <li>Sorting using <code>OrderBy()</code> and <code>OrderByDescending()</code>.</li>
        <li>Selecting required columns using <code>Select()</code>.</li>
        <li>Grouping data using <code>GroupBy()</code>.</li>
        <li>Joining tables using <code>Join()</code>.</li>
        <li>Pagination using <code>Skip()</code> and <code>Take()</code>.</li>
    </ul>

    <p><strong>Performance Optimization Techniques:</strong></p>

    <ul>
        <li>Use <code>IQueryable</code> while building database queries.</li>
        <li>Use <code>AsNoTracking()</code> for read-only operations.</li>
        <li>Select only required columns using <code>Select()</code>.</li>
        <li>Apply filtering before calling <code>ToList()</code>.</li>
        <li>Implement pagination using <code>Skip()</code> and <code>Take()</code>.</li>
        <li>Avoid the N+1 Query Problem by using <code>Include()</code> or projection.</li>
        <li>Use asynchronous methods such as <code>ToListAsync()</code>.</li>
        <li>Avoid unnecessary <code>ToList()</code> calls in the middle of a query.</li>
    </ul>

    <p><strong>Optimized Example:</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .AsNoTracking()
    .Where(e => e.Department == "IT")
    .Select(e => new
    {
        e.Id,
        e.Name,
        e.Salary
    })
    .OrderBy(e => e.Name)
    .Skip(0)
    .Take(20)
    .ToListAsync();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Search API with one million records, filtering,
        pagination, projection, and AsNoTracking() were used together.
        This reduced database load, network traffic, and memory usage,
        improving response time significantly.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        For high-performance LINQ queries, I build queries using IQueryable, apply filtering before materializing data, use projection, AsNoTracking(), pagination, async methods, and avoid unnecessary data retrieval.
    </div>
    `
},
"Migrations and Handling Database Changes in Entity Framework Core": {
    "answer": `
    <p>
        <strong>Entity Framework Core Migrations</strong> is a feature that
        manages database schema changes in a controlled and versioned manner.
        Instead of manually writing SQL scripts for every change, EF Core
        generates migration files that can be applied consistently across
        Development, Test, and Production environments.
    </p>

    <p><strong>Migration Workflow:</strong></p>

    <ol>
        <li>Modify the Entity class or DbContext.</li>
        <li>Create a migration using <code>Add-Migration</code>.</li>
        <li>Review the generated migration code.</li>
        <li>Apply the migration using <code>Update-Database</code>.</li>
        <li>Deploy the migration to higher environments.</li>
    </ol>

    <p><strong>Common Commands:</strong></p>

    <pre><code class="language-bash">
Add-Migration AddDepartmentTable

Update-Database

Remove-Migration

Script-Migration
    </code></pre>

    <p><strong>Example:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }   // Newly Added
}
    </code></pre>

    <p>
        Running <code>Add-Migration AddEmailColumn</code> generates a migration
        that adds the Email column to the Employees table.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose a new business requirement introduces a Department table.
        Developers update the entity model, generate a migration, validate it
        in Development and QA, and then apply the reviewed migration in
        Production during a deployment window.
    </p>

    <p><strong>Best Practices:</strong></p>

    <ul>
        <li>Review generated migrations before execution.</li>
        <li>Keep migrations small and focused.</li>
        <li>Test migrations in lower environments first.</li>
        <li>Back up the production database before applying schema changes.</li>
        <li>Use SQL migration scripts for production deployments when required.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Entity Framework Core Migrations provide version-controlled database schema changes, allowing developers to evolve the database safely and consistently across environments.
    </div>
    `
},
"What is deferred execution in LINQ?": {
    "answer": `
    <p>
        <strong>Deferred Execution</strong> is a feature of LINQ where a query is
        <strong>not executed when it is defined</strong>. Instead, it executes
        only when the results are actually enumerated, such as by using
        <strong>foreach</strong>, <strong>ToList()</strong>,
        <strong>First()</strong>, <strong>Count()</strong>, or similar methods.
    </p>

    <p>
        This means that if the underlying data source changes before the query
        is executed, the query returns the latest data. Also, every time the
        query is enumerated, it executes again unless the results have been
        materialized using methods like <strong>ToList()</strong> or
        <strong>ToArray()</strong>.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
Create LINQ Query
        │
        ▼
No Execution Yet
        │
        ▼
Source Data Changes
        │
        ▼
foreach / ToList() / First()
        │
        ▼
Query Executes
        │
        ▼
Latest Data Returned
    </code></pre>

    <p><strong>Example</strong></p>

    <pre><code class="language-csharp">
var nums = new List&lt;int&gt; { 1, 2, 3 };

var query = nums.Where(n => n > 1);
// Query is NOT executed here

nums.Add(4);

foreach (var n in query)
{
    Console.Write(n + " ");
}

// Output:
// 2 3 4
    </code></pre>

    <p><strong>Immediate Execution</strong></p>

    <pre><code class="language-csharp">
var nums = new List&lt;int&gt; { 1, 2, 3 };

var result = nums
    .Where(n => n > 1)
    .ToList();      // Executes immediately

nums.Add(4);

foreach (var n in result)
{
    Console.Write(n + " ");
}

// Output:
// 2 3
    </code></pre>

    <p><strong>Benefits</strong></p>

    <ul>
        <li>Improves performance by delaying execution until needed.</li>
        <li>Always retrieves the latest data from the source.</li>
        <li>Avoids unnecessary query execution.</li>
        <li>Supports query composition.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Deferred execution means a LINQ query is executed only when its results
        are enumerated. If the source data changes before execution, the query
        returns the updated data. Methods like <strong>ToList()</strong> and
        <strong>ToArray()</strong> force immediate execution.
    </div>
    `
},
"Why is Count() == 0 worse than Any() on an IEnumerable?": {
    "answer": `
    <p>
        When working with an <strong>IEnumerable</strong>, using
        <strong>Any()</strong> is generally more efficient than using
        <strong>Count() > 0</strong> to check whether a collection contains
        elements.
    </p>

    <p>
        <strong>Any()</strong> stops as soon as it finds the first element,
        whereas <strong>Count()</strong> must iterate through the entire
        collection to determine the total number of elements.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
IEnumerable
      │
      ├── Any()
      │      │
      │      ▼
      │ Stops at First Element ✔
      │
      └── Count()
             │
             ▼
      Scans Entire Collection ❌
    </code></pre>

    <p><strong>Example</strong></p>

    <pre><code class="language-csharp">
var items = GetMillionItems();

// Slow
bool hasItems1 = items.Count() > 0;

// Fast
bool hasItems2 = items.Any();
    </code></pre>

    <p><strong>Time Complexity</strong></p>

    <ul>
        <li><strong>Any()</strong> - O(1) in most cases because it stops after finding the first element.</li>
        <li><strong>Count()</strong> - O(n) for IEnumerable because it traverses the entire sequence.</li>
    </ul>

    <p><strong>Exception</strong></p>

    <p>
        For collections such as <strong>List&lt;T&gt;</strong> and arrays,
        <strong>Count</strong> and <strong>Length</strong> are properties,
        not LINQ methods. They return the value in <strong>O(1)</strong> time.
    </p>

    <pre><code class="language-csharp">
List&lt;int&gt; numbers = new List&lt;int&gt;();

if (numbers.Count > 0)
{
    Console.WriteLine("Has Items");
}
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Use <strong>Any()</strong> when checking if an IEnumerable contains data.</li>
        <li>Use <strong>Count()</strong> only when you actually need the total number of elements.</li>
        <li>For List&lt;T&gt; and arrays, use the <strong>Count</strong> or <strong>Length</strong> property.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        For an <strong>IEnumerable</strong>, <strong>Any()</strong> is preferred
        over <strong>Count() > 0</strong> because it stops after finding the first
        element, whereas <strong>Count()</strong> traverses the entire sequence.
        The exception is collections like <strong>List&lt;T&gt;</strong> and arrays,
        where <strong>Count</strong> and <strong>Length</strong> are O(1) properties.
    </div>
    `
},
"Difference between IEnumerable and IList": {
    "answer": `
    <p>
        <strong>IEnumerable</strong> and <strong>IList</strong> are collection
        interfaces in .NET, but they serve different purposes.
    </p>

    <p>
        <strong>IEnumerable</strong> is used for reading and iterating over a
        collection sequentially, whereas <strong>IList</strong> represents an
        ordered collection that supports indexing, adding, removing, and updating
        elements.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
IEnumerable
      │
      ▼
Read Only
      │
foreach
      │
Sequential Access


IList
      │
      ▼
Read + Write
      │
Index Based Access
      │
Add / Remove / Update
    </code></pre>

    <p><strong>IEnumerable Example</strong></p>

    <pre><code class="language-csharp">
IEnumerable&lt;string&gt; names =
    new List&lt;string&gt;
{
    "John",
    "Peter",
    "David"
};

foreach (var name in names)
{
    Console.WriteLine(name);
}
    </code></pre>

    <p><strong>IList Example</strong></p>

    <pre><code class="language-csharp">
IList&lt;string&gt; names =
    new List&lt;string&gt;();

names.Add("John");
names.Add("Peter");

names[1] = "David";

names.Remove("John");
    </code></pre>

    <p><strong>Key Differences</strong></p>

    <ul>
        <li><strong>IEnumerable</strong> supports only forward iteration using <strong>foreach</strong>.</li>
        <li><strong>IList</strong> supports indexing (<strong>[]</strong>) and modification of data.</li>
        <li><strong>IEnumerable</strong> is read-only from the consumer's perspective.</li>
        <li><strong>IList</strong> supports Add(), Remove(), Insert(), Update(), and Count.</li>
        <li><strong>IList</strong> inherits from <strong>ICollection</strong>, which in turn inherits from <strong>IEnumerable</strong>.</li>
    </ul>

    <p><strong>When to Use</strong></p>

    <ul>
        <li>Use <strong>IEnumerable</strong> when you only need to read or iterate through data.</li>
        <li>Use <strong>IList</strong> when you need random access or to modify the collection.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        IEnumerable is used for read-only sequential iteration, whereas IList
        supports both reading and modifying a collection with index-based access.
    </div>
    `
},
"IEnumerable and IQueryable in C#?": {
    "answer": `
    <p>
        Both <code>IEnumerable</code> and <code>IQueryable</code> are used to query collections,
        but they differ in where the query is executed.
    </p>

    <p>
        <code>IEnumerable</code> executes the query in memory after the data has been
        loaded from the database. <code>IQueryable</code> builds the query and executes
        it on the database server, fetching only the required data.
    </p>

    <p><strong>Key Differences:</strong></p>

    <ul>
        <li><strong>IEnumerable</strong> → Executes query in memory.</li>
        <li><strong>IQueryable</strong> → Executes query on the database.</li>
        <li><strong>IEnumerable</strong> → Suitable for in-memory collections.</li>
        <li><strong>IQueryable</strong> → Suitable for Entity Framework and LINQ to SQL.</li>
        <li><strong>IEnumerable</strong> → Retrieves all records before filtering.</li>
        <li><strong>IQueryable</strong> → Retrieves only filtered records from the database.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        <code>IEnumerable</code> performs filtering in memory, whereas
        <code>IQueryable</code> performs filtering at the database level, making it more efficient for large datasets.
    </div>
    `
},
"Total Empoloyee Count Departmentwise" :{
    "answer":`
    <strong><p> LINQ Method Syntax </strong></p>

   <pre><code class="language-sql">
   var result = employees
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        EmployeeCount = g.Count()
    });
    </pre></code>
      <strong><p> LINQ Query Syntax </strong></p>
         <pre><code class="language-sql">
var result = from e in employees
             group e by e.Department into g
             select new
             {
                 Department = g.Key,
                 EmployeeCount = g.Count()
             };
         </pre></code>
    `
}
};
