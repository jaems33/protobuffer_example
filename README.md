# Example of using Google's Protocol Buffer

Purpose: To test a simple workflow and view the difference between serializing data in JSON vs. Google's proto format.

### Test Case:
| field     | type      |
|-----------|-----------|
| name      | string    |
| id        | int       |
| salary    | float     |


### Result:
| Instances | json (mb) | proto (mb) |
|-----------|-----------|------------|
| 100,000   | 5         | 2.2        |
| 1,000,000 | 50        | 22         |
| 5,000,000 | 250       | 110        |


How to install protobuf compiler for Mac: https://gist.github.com/rajkrrsingh/77f3c4d20c109c96a3e9b36c224c6b3d

## Run after proto installation to generate protobuff js tools:
```
protoc --js_out=import_style=commonjs,binary:. employees.proto
```