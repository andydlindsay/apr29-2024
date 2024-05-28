# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Activity: Convert 2 Spreadsheets
- [x] Student Suggestion ERD(s)

### Primary Keys
* uniquely identifies one record in a table
* all primary keys (PK) are autoincrementing integers
* FK has to be the same type as the PK

### Naming Conventions
* lower case snake_case for all tables, fields
* table names should be plural users, pizzas
* PK are `id`
* FK are always the foreign table singular plus _id user_id pizza_id

### Data Types
* every field needs to have a data type

### Relationship Types
* one-to-one => one record in table A is related to only one record in table B
* one-to-many/many-to-one => one record in table A is related to one or more records in table B
* many-to-many => one or more records in table A is related to one or more records in table B

join/junction/bridge

### Design Concepts
* make fields required based on initial values
* intelligent default values DEFAULT NOW() false/true
* don't use calculated fields; first_name last_name full_name
* pull repeating values out to their own table Saskatoon Stoon ToonTown Sasktoon
* use a lookup table
* try not to delete anything is_active

1 Calgary
2 Saskatoon
3 Toronto
















