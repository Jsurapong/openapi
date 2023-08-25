
## Ch12 Implementing frontend code and reacting to changes
- Mock the data on the view layer.
    - quick
    - difficult for add mock data and remove it
    - should only use in short-lived tests
- Mock the data in a central data store (think Redux, MobX, RxJS, etc.).
    - better
    - the downside we still have mock doe in our source files
- Set up a mock API server.
    - frontend code clean
    - almost no code changes whten it comes time to switch to the real backend.
    - trade-offs can't write logic in our mock server
```bash
npm install --global @stoplight/prism-cli
prism mock -p 8080 ./ch12/openapi.yaml
```
**Prefer: example=empty**
```
 examples:
    two-items:
      summary: Two Job Applications
    empty:
      summary: Zero Job Applications
    many:
      summary: A lot of Job Applications
      
curl -H "Prefer: example=empty" http://localhost:8080/users/663/job-applications | jq '.'
curl -H "Prefer: example=two-items" http://localhost:8080/users/663/job-applications | jq '.'
curl -H "Prefer: example=many" http://localhost:8080/users/663/job-applications | jq '.'
```
**Prefer: code=200**
```bash
response:
    '200':
    '404':
    
curl -H "Prefer: code=404" http://localhost:8080/users/663/job-applications
```