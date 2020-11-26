# Protobuff example

Purpose: To see the difference between serializing lots of data in JSON vs. Google's proto format.

How to install for Mac: https://gist.github.com/rajkrrsingh/77f3c4d20c109c96a3e9b36c224c6b3d

## Run command after installation:
```
protoc --js_out=import_style=commonjs,binary:. employees.proto
```