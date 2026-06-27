window.data = window.data || {};
window.data.sql = {
  "Get Nth Highest and Lowest Salary in SQL": {
    "answer": `
    <p>
        The Nth highest or lowest salary can be retrieved using
        <code>DENSE_RANK()</code>, <code>ROW_NUMBER()</code>, or
        <code>OFFSET FETCH</code>. In interview scenarios,
        <code>DENSE_RANK()</code> is generally preferred because it correctly
        handles duplicate salaries.
    </p>

    <p><strong>Employee Table</strong></p>

    <pre><code class="language-sql">
Employee
--------------------------------------
Id   Name     Salary
--------------------------------------
1    John      80000
2    David     70000
3    Alex      90000
4    Sam       70000
5    Mike      60000
    </code></pre>

    <p><strong>Nth Highest Salary</strong></p>

    <pre><code class="language-sql">
DECLARE @N INT = 2;

SELECT Salary
FROM
(
    SELECT Salary,
           DENSE_RANK() OVER(ORDER BY Salary DESC) AS RankNo
    FROM Employee
) T
WHERE RankNo = @N;
    </code></pre>

    <p><strong>Nth Lowest Salary</strong></p>

    <pre><code class="language-sql">
DECLARE @N INT = 2;

SELECT Salary
FROM
(
    SELECT Salary,
           DENSE_RANK() OVER(ORDER BY Salary ASC) AS RankNo
    FROM Employee
) T
WHERE RankNo = @N;
    </code></pre>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Use DENSE_RANK() to find the Nth highest or lowest salary because it correctly handles duplicate salary values.
    </div>
    `
},
  "Clustered Index vs Non-Clustered Index": {
    "answer": `
    <p>
        An <strong>Index</strong> improves the speed of data retrieval from a
        database table. SQL Server supports two main types of indexes:
        <strong>Clustered Index</strong> and <strong>Non-Clustered Index</strong>.
    </p>

    <p><strong>Clustered Index</strong></p>

    <ul>
        <li>Stores the actual table data in sorted order.</li>
        <li>There can be only one Clustered Index per table.</li>
        <li>Usually created on the Primary Key.</li>
        <li>Faster for range searches and sorting.</li>
    </ul>

    <p><strong>Non-Clustered Index</strong></p>

    <ul>
        <li>Stores only index keys and pointers to the actual data.</li>
        <li>A table can have multiple Non-Clustered Indexes.</li>
        <li>Ideal for frequently searched columns.</li>
        <li>Requires an extra lookup to fetch non-indexed columns.</li>
    </ul>

    <p><strong>Create Clustered Index</strong></p>

    <pre><code class="language-sql">
CREATE CLUSTERED INDEX IX_Employee_Id
ON Employee(Id);
    </code></pre>

    <p><strong>Create Non-Clustered Index</strong></p>

    <pre><code class="language-sql">
CREATE NONCLUSTERED INDEX IX_Employee_Email
ON Employee(Email);
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee table, the Primary Key (EmployeeId) is usually the
        Clustered Index because records are commonly retrieved by ID. Columns
        such as Email, DepartmentId, and MobileNumber are good candidates for
        Non-Clustered Indexes because they are frequently used in search
        conditions.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A Clustered Index stores table data physically in sorted order, whereas a Non-Clustered Index stores only index keys with pointers to the actual data. A table can have one Clustered Index but many Non-Clustered Indexes.
    </div>
    `
},"What is the difference between DELETE and TRUNCATE?": {
    "answer": `
    <p>
        <strong>DELETE</strong> and <strong>TRUNCATE</strong> are SQL commands
        used to remove data from a table, but they differ in performance,
        logging, rollback behavior, and usage.
    </p>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>DELETE</th>
            <th>TRUNCATE</th>
        </tr>

        <tr>
            <td>DML (Data Manipulation Language).</td>
            <td>DDL (Data Definition Language).</td>
        </tr>

        <tr>
            <td>Removes selected rows or all rows.</td>
            <td>Removes all rows from the table.</td>
        </tr>

        <tr>
            <td>Supports WHERE clause.</td>
            <td>Does not support WHERE clause.</td>
        </tr>

        <tr>
            <td>Logs each row deletion.</td>
            <td>Minimally logged (deallocates data pages).</td>
        </tr>

        <tr>
            <td>Slower for large tables.</td>
            <td>Faster for large tables.</td>
        </tr>

        <tr>
            <td>DELETE triggers are fired.</td>
            <td>DELETE triggers are not fired.</td>
        </tr>

        <tr>
            <td>Identity value is not reset.</td>
            <td>Identity value is reset.</td>
        </tr>
    </table>

    <p><strong>Examples:</strong></p>

    <pre><code class="language-sql">
-- Delete specific rows
DELETE FROM Employee
WHERE DepartmentId = 10;
    </code></pre>

    <pre><code class="language-sql">
-- Delete all rows
DELETE FROM Employee;
    </code></pre>

    <pre><code class="language-sql">
-- Remove all rows quickly
TRUNCATE TABLE Employee;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        During testing, if all data in a staging table needs to be removed,
        TRUNCATE is preferred because it is faster and resets the identity.
        If only inactive employees need to be removed while keeping other
        records, DELETE with a WHERE clause is used.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        DELETE removes rows individually and supports WHERE conditions, whereas TRUNCATE quickly removes all rows by deallocating data pages, resets the identity, and does not support a WHERE clause.
    </div>
    `
},
  "What is a Common Table Expression (CTE) in SQL Server?": {
    "answer": `
    <p>
        A <strong>Common Table Expression (CTE)</strong> is a temporary named
        result set that exists only for the duration of a single SQL statement.
        It improves query readability and is commonly used to simplify complex
        queries, perform recursive operations, and avoid repeating subqueries.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code class="language-sql">
WITH EmployeeCTE AS
(
    SELECT EmployeeId,
           Name,
           Salary
    FROM Employee
)
SELECT *
FROM EmployeeCTE;
    </code></pre>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Simplifying complex SQL queries.</li>
        <li>Replacing nested subqueries.</li>
        <li>Using window functions (ROW_NUMBER, RANK, DENSE_RANK).</li>
        <li>Recursive queries (Employee-Manager hierarchy).</li>
        <li>Finding Nth highest salary.</li>
    </ul>

    <p><strong>Recursive CTE Example:</strong></p>

    <pre><code class="language-sql">
WITH EmployeeHierarchy AS
(
    SELECT EmployeeId,
           Name,
           ManagerId
    FROM Employee
    WHERE ManagerId IS NULL

    UNION ALL

    SELECT e.EmployeeId,
           e.Name,
           e.ManagerId
    FROM Employee e
    INNER JOIN EmployeeHierarchy h
        ON e.ManagerId = h.EmployeeId
)
SELECT *
FROM EmployeeHierarchy;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an organization chart, a Recursive CTE can retrieve all employees
        reporting to a manager at multiple levels without writing multiple joins.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A CTE is a temporary named result set used within a single SQL statement
        to improve readability, simplify complex queries, and support recursive
        operations.
    </div>
    `
},
  "Difference between Temp Table and Table Variable": {
    "answer": `
    <p>
        Both <strong>Temp Tables</strong> and <strong>Table Variables</strong>
        are used to store temporary data in SQL Server. However, they differ
        in scope, performance, indexing, transaction behavior, and use cases.
    </p>

    <p><strong>Temp Table</strong></p>

    <pre><code class="language-sql">
CREATE TABLE #Employee
(
    Id INT,
    Name VARCHAR(100),
    Salary DECIMAL(10,2)
);
    </code></pre>

    <p><strong>Table Variable</strong></p>

    <pre><code class="language-sql">
DECLARE @Employee TABLE
(
    Id INT,
    Name VARCHAR(100),
    Salary DECIMAL(10,2)
);
    </code></pre>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Temp Table</th>
            <th>Table Variable</th>
        </tr>

        <tr>
            <td>Created using #TableName.</td>
            <td>Declared using DECLARE @TableName.</td>
        </tr>

        <tr>
            <td>Stored in tempdb.</td>
            <td>Also stored in tempdb internally.</td>
        </tr>

        <tr>
            <td>Suitable for large datasets.</td>
            <td>Suitable for small datasets.</td>
        </tr>

        <tr>
            <td>Supports indexes and statistics.</td>
            <td>Limited indexing; statistics are limited.</td>
        </tr>

        <tr>
            <td>Better query optimization for large data.</td>
            <td>May produce less efficient execution plans for large data.</td>
        </tr>

        <tr>
            <td>Visible within the session and nested procedures.</td>
            <td>Visible only within the current batch, procedure, or function.</td>
        </tr>
    </table>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Use a Temp Table when processing thousands of records for reporting or
        ETL operations. Use a Table Variable when storing a small number of
        rows, such as a list of IDs or intermediate values inside a stored
        procedure.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Temp Tables are preferred for large datasets because they support
        statistics and better query optimization, whereas Table Variables are
        lightweight and best suited for small datasets.
    </div>
    `
},
"MERGE Statement in SQL Server": {
    "answer": `
    <p>
        The <strong>MERGE</strong> statement combines INSERT, UPDATE, and DELETE
        operations into a single SQL statement. It compares a source table with
        a target table and performs the appropriate action based on whether a
        matching record exists.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code class="language-sql">
MERGE TargetTable AS T
USING SourceTable AS S
ON T.EmployeeId = S.EmployeeId

WHEN MATCHED THEN
    UPDATE SET
        T.Name = S.Name,
        T.Salary = S.Salary

WHEN NOT MATCHED THEN
    INSERT(EmployeeId, Name, Salary)
    VALUES(S.EmployeeId, S.Name, S.Salary)

WHEN NOT MATCHED BY SOURCE THEN
    DELETE;
    </code></pre>

    <p><strong>How MERGE Works:</strong></p>

    <ul>
        <li>If a matching record exists → UPDATE.</li>
        <li>If no matching record exists in the target → INSERT.</li>
        <li>If a target record no longer exists in the source → DELETE (optional).</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A company receives a daily Employee file from an HR system.
        Existing employees are updated, new employees are inserted,
        and employees removed from the HR system are deleted from
        the target table using a single MERGE statement.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Data synchronization.</li>
        <li>ETL processes.</li>
        <li>Data warehouse loading.</li>
        <li>Master data synchronization.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        MERGE synchronizes data between a source and target table by performing INSERT, UPDATE, and DELETE operations in a single statement.
    </div>
    `
},
"How to Improve Stored Procedure Performance in SQL Server": {
    "answer": `
    <p>
        Improving stored procedure performance involves identifying bottlenecks,
        optimizing SQL queries, reducing I/O operations, and ensuring efficient
        execution plans. The first step is always to identify the root cause
        before making changes.
    </p>

    <p><strong>Performance Optimization Techniques:</strong></p>

    <ul>
        <li>Analyze the Actual Execution Plan.</li>
        <li>Create appropriate Clustered and Non-Clustered Indexes.</li>
        <li>Avoid SELECT * and return only required columns.</li>
        <li>Reduce unnecessary table scans by using indexes.</li>
        <li>Avoid cursors whenever possible; use set-based operations.</li>
        <li>Use EXISTS instead of IN for large datasets when appropriate.</li>
        <li>Use Temp Tables for large intermediate results.</li>
        <li>Avoid scalar functions in WHERE clauses.</li>
        <li>Update statistics regularly.</li>
        <li>Rebuild or reorganize fragmented indexes.</li>
        <li>Avoid parameter sniffing issues using OPTION(RECOMPILE) or OPTIMIZE FOR when appropriate.</li>
        <li>Monitor performance using Query Store and SQL Profiler.</li>
    </ul>

    <p><strong>Example:</strong></p>

    <pre><code class="language-sql">
-- Bad
SELECT *
FROM Employee
WHERE DepartmentId = 10;
    </code></pre>

    <pre><code class="language-sql">
-- Better
SELECT EmployeeId,
       Name,
       Salary
FROM Employee
WHERE DepartmentId = 10;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A payroll stored procedure was taking 20 seconds because it performed
        a table scan on a table containing millions of records. After creating
        a Non-Clustered Index on DepartmentId, removing SELECT *, and updating
        statistics, execution time reduced to less than one second.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        To improve stored procedure performance, I first analyze the execution plan, identify bottlenecks, optimize indexes and queries, avoid unnecessary data retrieval, update statistics, and monitor execution using SQL Server tools.
    </div>
    `
},
"ROW_NUMBER() vs RANK() vs DENSE_RANK()": {
    "answer": `
    <p>
        <strong>ROW_NUMBER()</strong>, <strong>RANK()</strong>, and
        <strong>DENSE_RANK()</strong> are SQL Server window functions used to
        assign rankings to rows within a result set. The key difference is how
        they handle duplicate values.
    </p>

    <p><strong>Sample Data:</strong></p>

    <pre><code class="language-sql">
Employee
----------------------------------
Id  Name   Salary
----------------------------------
1   John    90000
2   David   80000
3   Alex    80000
4   Sam     70000
5   Mike    60000
    </code></pre>

    <p><strong>ROW_NUMBER()</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       Salary,
       ROW_NUMBER() OVER(ORDER BY Salary DESC) AS RowNum
FROM Employee;
    </code></pre>

    <p><strong>RANK()</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       Salary,
       RANK() OVER(ORDER BY Salary DESC) AS RankNo
FROM Employee;
    </code></pre>

    <p><strong>DENSE_RANK()</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       Salary,
       DENSE_RANK() OVER(ORDER BY Salary DESC) AS DenseRank
FROM Employee;
    </code></pre>

    <p><strong>Use Cases:</strong></p>

    <ul>
        <li><strong>ROW_NUMBER()</strong> - Pagination and unique row numbering.</li>
        <li><strong>RANK()</strong> - Competition ranking where skipped ranks are acceptable.</li>
        <li><strong>DENSE_RANK()</strong> - Finding Nth highest salary while handling duplicates.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ROW_NUMBER() assigns a unique number to every row, RANK() assigns the same rank to duplicates but skips the next rank, while DENSE_RANK() assigns the same rank to duplicates without skipping any ranks.
    </div>
    `
},
"Find Duplicate Records in SQL Server": {
    "answer": `
    <p>
        Duplicate records can be identified using the
        <code>GROUP BY</code> clause along with the
        <code>HAVING</code> clause. The HAVING clause filters groups that
        appear more than once.
    </p>

    <p><strong>Sample Table</strong></p>

    <pre><code class="language-sql">
Employee
------------------------------------------
Id  Name    Email             Salary
------------------------------------------
1   John    john@test.com      50000
2   David   david@test.com     60000
3   John    john@test.com      50000
4   Alex    alex@test.com      70000
5   David   david@test.com     60000
    </code></pre>

    <p><strong>Find Duplicate Records</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       Email,
       COUNT(*) AS TotalRecords
FROM Employee
GROUP BY Name, Email
HAVING COUNT(*) > 1;
    </code></pre>

    <p><strong>Retrieve Complete Duplicate Rows</strong></p>

    <pre><code class="language-sql">
SELECT *
FROM Employee
WHERE Email IN
(
    SELECT Email
    FROM Employee
    GROUP BY Email
    HAVING COUNT(*) > 1
);
    </code></pre>

    <p><strong>Delete Duplicate Records (Keep One)</strong></p>

    <pre><code class="language-sql">
WITH DuplicateCTE AS
(
    SELECT *,
           ROW_NUMBER() OVER
           (
               PARTITION BY Name, Email
               ORDER BY Id
           ) AS RN
    FROM Employee
)
DELETE
FROM DuplicateCTE
WHERE RN > 1;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        During data migration or file imports, duplicate employee or customer
        records may be created. GROUP BY identifies duplicate records, while
        ROW_NUMBER() helps remove duplicates while keeping the first occurrence.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Use GROUP BY with HAVING COUNT(*) > 1 to find duplicate records, and use ROW_NUMBER() with a CTE to safely remove duplicates while retaining one record.
    </div>
    `
},
"Temporary Tables in SQL Server": {
    "answer": `
    <p>
        A <strong>Temporary Table</strong> is a table stored in the
        <strong>tempdb</strong> database and is used to store intermediate
        data temporarily during the execution of queries, stored procedures,
        or batch processes.
    </p>

    <p><strong>Types of Temporary Tables:</strong></p>

    <ul>
        <li><strong>Local Temporary Table (#Table)</strong> - Visible only within the current session.</li>
        <li><strong>Global Temporary Table (##Table)</strong> - Visible to all sessions until the last session using it is closed.</li>
    </ul>

    <p><strong>Create Local Temporary Table</strong></p>

    <pre><code class="language-sql">
CREATE TABLE #Employee
(
    EmployeeId INT,
    Name VARCHAR(100),
    Salary DECIMAL(10,2)
);
    </code></pre>

    <p><strong>Create Global Temporary Table</strong></p>

    <pre><code class="language-sql">
CREATE TABLE ##Employee
(
    EmployeeId INT,
    Name VARCHAR(100)
);
    </code></pre>

    <p><strong>Insert Data</strong></p>

    <pre><code class="language-sql">
INSERT INTO #Employee
VALUES (1,'John',50000);
    </code></pre>

    <p><strong>Query Data</strong></p>

    <pre><code class="language-sql">
SELECT *
FROM #Employee;
    </code></pre>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Store intermediate query results.</li>
        <li>Break complex queries into smaller steps.</li>
        <li>Large reporting procedures.</li>
        <li>ETL and data migration.</li>
        <li>Improving stored procedure performance.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In a payroll system, employee data is first filtered into a temporary
        table. Salary, tax, and bonus calculations are then performed on the
        temporary table before generating the final payroll report.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A Temporary Table is a table stored in tempdb for holding intermediate
        data. Local Temporary Tables are session-specific, whereas Global
        Temporary Tables are accessible by all sessions until they are no
        longer in use.
    </div>
    `
},
"COALESCE() Function in SQL Server": {
    "answer": `
    <p>
        The <strong>COALESCE()</strong> function returns the first
        <strong>non-NULL</strong> value from a list of expressions.
        It is commonly used to replace NULL values and provide default values
        in SQL queries.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code class="language-sql">
COALESCE(expression1, expression2, expression3, ...)
    </code></pre>

    <p><strong>Example 1 - Replace NULL</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       COALESCE(PhoneNo,'Not Available') AS Phone
FROM Employee;
    </code></pre>

    <p><strong>Example 2 - Multiple Values</strong></p>

    <pre><code class="language-sql">
SELECT Name,
       COALESCE(HomePhone,
                OfficePhone,
                MobilePhone,
                'No Contact')
AS ContactNumber
FROM Employee;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, if Home Phone is NULL,
        the application checks Office Phone. If Office Phone is also NULL,
        it checks Mobile Phone. If all values are NULL,
        'No Contact' is returned.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        COALESCE() returns the first non-NULL value from a list of expressions
        and is commonly used to replace NULL values with default values.
    </div>
    `
},
"STUFF() Function in SQL Server": {
    "answer": `
    <p>
        The <strong>STUFF()</strong> function inserts a string into another
        string after deleting a specified number of characters from a given
        position. It is commonly used for string manipulation and string
        aggregation.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code class="language-sql">
STUFF
(
    character_expression,
    start,
    length,
    replaceWithExpression
)
    </code></pre>

    <p><strong>Example 1 - Replace Part of a String</strong></p>

    <pre><code class="language-sql">
SELECT STUFF('Hello World',7,5,'SQL');
    </code></pre>

    <p><strong>Output</strong></p>

    <pre><code>
Hello SQL
    </code></pre>

    <p><strong>Example 2 - Insert Text</strong></p>

    <pre><code class="language-sql">
SELECT STUFF('HelloWorld',6,0,' ');
    </code></pre>

    <p><strong>Output</strong></p>

    <pre><code>
Hello World
    </code></pre>

    <p><strong>Example 3 - Comma Separated Values</strong></p>

    <pre><code class="language-sql">
SELECT STUFF
(
(
    SELECT ',' + Name
    FROM Employee
    FOR XML PATH('')
),
1,1,''
) AS EmployeeNames;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Before SQL Server 2017 introduced STRING_AGG(), developers commonly
        used STUFF() with FOR XML PATH('') to combine multiple row values into
        a single comma-separated string.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        STUFF() deletes a specified number of characters from a string and
        inserts another string at the same position. It is widely used for
        string manipulation and string aggregation.
    </div>
    `
},
"SUBSTRING() Function in SQL Server": {
    "answer": `
    <p>
        The <strong>SUBSTRING()</strong> function extracts a specified number
        of characters from a string, starting at a given position. It is
        commonly used to retrieve part of a string such as a name, code,
        date, or identifier.
    </p>

    <p><strong>Syntax:</strong></p>

    <pre><code class="language-sql">
SUBSTRING
(
    expression,
    start,
    length
)
    </code></pre>

    <p><strong>Example 1 - Extract Characters</strong></p>

    <pre><code class="language-sql">
SELECT SUBSTRING('Microsoft',1,5);
    </code></pre>

    <p><strong>Output</strong></p>

    <pre><code>
Micro
    </code></pre>

    <p><strong>Example 2 - Extract Employee Code</strong></p>

    <pre><code class="language-sql">
SELECT SUBSTRING('EMP-10025',5,5);
    </code></pre>

    <p><strong>Output</strong></p>

    <pre><code>
10025
    </code></pre>

    <p><strong>Example 3 - Extract Domain Name</strong></p>

    <pre><code class="language-sql">
SELECT Email,
       SUBSTRING
       (
           Email,
           CHARINDEX('@',Email)+1,
           LEN(Email)
       ) AS Domain
FROM Employee;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In HR applications, SUBSTRING() is used to extract employee codes,
        while in CRM systems it is commonly used to extract email domains,
        phone prefixes, and formatted reference numbers.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        SUBSTRING() extracts a specified portion of a string by using a
        starting position and length.
    </div>
    `
},
"Difference between Function and Stored Procedure": {
    "answer": `
    <p>
        Both <strong>Functions</strong> and <strong>Stored Procedures</strong>
        are reusable database objects in SQL Server. However, they differ in
        purpose, return values, data modification capabilities, and how they
        are used.
    </p>

    <p><strong>Function Example</strong></p>

    <pre><code class="language-sql">
CREATE FUNCTION fn_GetBonus
(
    @Salary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * 0.10;
END;
    </code></pre>

    <p><strong>Stored Procedure Example</strong></p>

    <pre><code class="language-sql">
CREATE PROCEDURE usp_GetEmployees
AS
BEGIN
    SELECT *
    FROM Employee;
END;
    </code></pre>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Function</th>
            <th>Stored Procedure</th>
        </tr>

        <tr>
            <td>Must return a value (scalar or table).</td>
            <td>May return zero, one, or multiple result sets.</td>
        </tr>

        <tr>
            <td>Can be used inside SELECT statements.</td>
            <td>Cannot be used inside a SELECT statement.</td>
        </tr>

        <tr>
            <td>Generally used for calculations and reusable business logic.</td>
            <td>Used for business operations, CRUD, reporting, and ETL.</td>
        </tr>

        <tr>
            <td>Cannot execute dynamic SQL or manage transactions.</td>
            <td>Can execute dynamic SQL and manage transactions.</td>
        </tr>

        <tr>
            <td>Does not modify database state (except some table-valued function scenarios).</td>
            <td>Can INSERT, UPDATE, DELETE, and MERGE data.</td>
        </tr>
    </table>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A Function can calculate employee bonus or tax based on salary.
        A Stored Procedure can process payroll, update employee salaries,
        generate reports, and maintain audit records.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Functions are primarily used for reusable calculations and return a value,
        whereas Stored Procedures are used to perform business operations and can
        return multiple result sets as well as modify database data.
    </div>
    `
},
"Difference between Function and Stored Procedure": {
    "answer": `
    <p>
        Both <strong>Functions</strong> and <strong>Stored Procedures</strong>
        are reusable database objects in SQL Server. However, they differ in
        purpose, return values, data modification capabilities, and how they
        are used.
    </p>

    <p><strong>Function Example</strong></p>

    <pre><code class="language-sql">
CREATE FUNCTION fn_GetBonus
(
    @Salary DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * 0.10;
END;
    </code></pre>

    <p><strong>Stored Procedure Example</strong></p>

    <pre><code class="language-sql">
CREATE PROCEDURE usp_GetEmployees
AS
BEGIN
    SELECT *
    FROM Employee;
END;
    </code></pre>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Function</th>
            <th>Stored Procedure</th>
        </tr>

        <tr>
            <td>Must return a value (scalar or table).</td>
            <td>May return zero, one, or multiple result sets.</td>
        </tr>

        <tr>
            <td>Can be used inside SELECT statements.</td>
            <td>Cannot be used inside a SELECT statement.</td>
        </tr>

        <tr>
            <td>Generally used for calculations and reusable business logic.</td>
            <td>Used for business operations, CRUD, reporting, and ETL.</td>
        </tr>

        <tr>
            <td>Cannot execute dynamic SQL or manage transactions.</td>
            <td>Can execute dynamic SQL and manage transactions.</td>
        </tr>

        <tr>
            <td>Does not modify database state (except some table-valued function scenarios).</td>
            <td>Can INSERT, UPDATE, DELETE, and MERGE data.</td>
        </tr>
    </table>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A Function can calculate employee bonus or tax based on salary.
        A Stored Procedure can process payroll, update employee salaries,
        generate reports, and maintain audit records.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Functions are primarily used for reusable calculations and return a value,
        whereas Stored Procedures are used to perform business operations and can
        return multiple result sets as well as modify database data.
    </div>
    `
},
"Can We Update a View in SQL Server?": {
    "answer": `
    <p>
        <strong>Yes</strong>, a View can be updated if it meets certain
        conditions. An updatable view allows INSERT, UPDATE, and DELETE
        operations on the underlying base table.
    </p>

    <p><strong>When is a View Updatable?</strong></p>

    <ul>
        <li>The view is based on a single table.</li>
        <li>The view does not contain GROUP BY.</li>
        <li>The view does not contain DISTINCT.</li>
        <li>The view does not contain aggregate functions (SUM, COUNT, AVG, etc.).</li>
        <li>The view does not contain UNION or UNION ALL.</li>
        <li>The view does not contain calculated columns that are being updated.</li>
    </ul>

    <p><strong>Create View</strong></p>

    <pre><code class="language-sql">
CREATE VIEW vwEmployee
AS
SELECT EmployeeId,
       Name,
       Salary
FROM Employee;
    </code></pre>

    <p><strong>Update View</strong></p>

    <pre><code class="language-sql">
UPDATE vwEmployee
SET Salary = 60000
WHERE EmployeeId = 1;
    </code></pre>

    <p>
        The UPDATE statement modifies the underlying Employee table.
    </p>

    <p><strong>Non-Updatable View Example</strong></p>

    <pre><code class="language-sql">
CREATE VIEW vwDepartmentSalary
AS
SELECT DepartmentId,
       SUM(Salary) AS TotalSalary
FROM Employee
GROUP BY DepartmentId;
    </code></pre>

    <p>
        This view cannot be updated because it contains an aggregate function
        and GROUP BY.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A view can be updated only if it is based on a single table and does
        not contain GROUP BY, DISTINCT, aggregate functions, UNION, or other
        constructs that make rows non-updatable.
    </div>
    `
},
"Magic Tables (Inserted and Deleted) in SQL Server": {
    "answer": `
    <p>
        <strong>Magic Tables</strong> are special temporary logical tables
        automatically created by SQL Server whenever a DML trigger
        (INSERT, UPDATE, or DELETE) is executed.
        These tables are <strong>Inserted</strong> and <strong>Deleted</strong>.
    </p>

    <p><strong>Purpose of Magic Tables:</strong></p>

    <ul>
        <li>Capture newly inserted rows.</li>
        <li>Capture deleted rows.</li>
        <li>Compare old and new values during UPDATE.</li>
        <li>Create audit logs.</li>
        <li>Implement business rules.</li>
    </ul>

    <p><strong>Behavior of Magic Tables</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Operation</th>
            <th>Inserted Table</th>
            <th>Deleted Table</th>
        </tr>

        <tr>
            <td>INSERT</td>
            <td>Contains new rows</td>
            <td>Empty</td>
        </tr>

        <tr>
            <td>DELETE</td>
            <td>Empty</td>
            <td>Contains deleted rows</td>
        </tr>

        <tr>
            <td>UPDATE</td>
            <td>Contains new values</td>
            <td>Contains old values</td>
        </tr>
    </table>

    <p><strong>Example Trigger</strong></p>

    <pre><code class="language-sql">
CREATE TRIGGER trg_EmployeeAudit
ON Employee
AFTER UPDATE
AS
BEGIN
    SELECT *
    FROM Inserted;

    SELECT *
    FROM Deleted;
END;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, whenever an employee's salary is
        updated, the Deleted table stores the old salary while the Inserted
        table stores the new salary. These values can be written to an audit
        table for tracking salary changes.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Magic Tables are temporary logical tables named Inserted and Deleted,
        automatically created inside SQL Server triggers to store new and old
        row values during INSERT, UPDATE, and DELETE operations.
    </div>
    `
},
"Triggers in SQL Server": {
    "answer": `
    <p>
        A <strong>Trigger</strong> is a special type of stored procedure that
        executes automatically when a specified event (INSERT, UPDATE, DELETE,
        CREATE, ALTER, DROP, etc.) occurs on a table or database.
    </p>

    <p><strong>Types of Triggers:</strong></p>

    <ul>
        <li><strong>DML Trigger</strong> - Executes on INSERT, UPDATE, DELETE.</li>
        <li><strong>DDL Trigger</strong> - Executes on CREATE, ALTER, DROP.</li>
        <li><strong>LOGON Trigger</strong> - Executes when a user logs into SQL Server.</li>
    </ul>

    <p><strong>Example - AFTER INSERT Trigger</strong></p>

    <pre><code class="language-sql">
CREATE TRIGGER trg_AfterInsertEmployee
ON Employee
AFTER INSERT
AS
BEGIN
    PRINT 'Employee inserted successfully';
END;
    </code></pre>

    <p><strong>Example - Audit Trigger</strong></p>

    <pre><code class="language-sql">
CREATE TRIGGER trg_AuditSalary
ON Employee
AFTER UPDATE
AS
BEGIN
    INSERT INTO EmployeeAudit
    (
        EmployeeId,
        OldSalary,
        NewSalary,
        UpdatedDate
    )
    SELECT
        D.EmployeeId,
        D.Salary,
        I.Salary,
        GETDATE()
    FROM Deleted D
    INNER JOIN Inserted I
        ON D.EmployeeId = I.EmployeeId;
END;
    </code></pre>

    <p><strong>Common Uses:</strong></p>

    <ul>
        <li>Audit logging.</li>
        <li>Data validation.</li>
        <li>Prevent unauthorized changes.</li>
        <li>Maintain history tables.</li>
        <li>Enforce business rules.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In a banking application, whenever an account balance changes, an
        AFTER UPDATE trigger automatically records the previous and new
        balance in an audit table for compliance and reporting.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A Trigger is a special stored procedure that executes automatically
        in response to database events such as INSERT, UPDATE, DELETE, or DDL
        operations, and is commonly used for auditing, validation, and enforcing
        business rules.
    </div>
    `
},
"CTE vs Temp Table": {
    "answer": `
    <p>
        Both <strong>CTE (Common Table Expression)</strong> and
        <strong>Temporary Table</strong> are used to store intermediate
        result sets in SQL Server, but they differ in scope, storage,
        performance, and usage.
    </p>

    <p><strong>Execution Flow</strong></p>

    <pre><code class="language-text">
Base Tables
      │
      ▼
Query
      │
      ├── CTE (Temporary Result Set)
      │         │
      │         ▼
      │     Used Immediately
      │
      └── Temp Table
                │
                ▼
          Stored in tempdb
                │
                ▼
        Reused Multiple Times
    </code></pre>

    <p><strong>CTE Example</strong></p>

    <pre><code class="language-sql">
WITH EmployeeCTE AS
(
    SELECT EmployeeId,
           Name,
           Salary
    FROM Employees
)
SELECT *
FROM EmployeeCTE
WHERE Salary > 50000;
    </code></pre>

    <p><strong>Temp Table Example</strong></p>

    <pre><code class="language-sql">
CREATE TABLE #Employees
(
    EmployeeId INT,
    Name VARCHAR(100),
    Salary DECIMAL(10,2)
);

INSERT INTO #Employees
SELECT EmployeeId, Name, Salary
FROM Employees;

SELECT *
FROM #Employees
WHERE Salary > 50000;
    </code></pre>

    <p><strong>Key Differences</strong></p>

    <ul>
        <li><strong>CTE</strong> exists only for the execution of a single SQL statement.</li>
        <li><strong>Temp Table</strong> exists until the session ends or it is explicitly dropped.</li>
        <li>CTEs are not physically stored; Temp Tables are stored in <strong>tempdb</strong>.</li>
        <li>Temp Tables can have indexes and statistics, improving performance for large datasets.</li>
        <li>CTEs are ideal for readable queries and recursive operations.</li>
        <li>Temp Tables are better when the same data is reused multiple times.</li>
    </ul>

    <p><strong>When to Use</strong></p>

    <ul>
        <li>Use <strong>CTE</strong> for simple queries, recursion, and improving query readability.</li>
        <li>Use <strong>Temp Table</strong> for large datasets, complex joins, or when intermediate results are reused multiple times.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        A CTE is a temporary named result set available only for a single query,
        whereas a Temp Table is physically stored in tempdb, supports indexes,
        and can be reused across multiple SQL statements within the same session.
    </div>
    `
},
};
