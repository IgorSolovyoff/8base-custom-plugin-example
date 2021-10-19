# 8base Custom Plugin Example

## Get Started

Fork this repo and clone into your 8base project in plugins folder

`server/plugins/<PLUGIN-NAME>`

## Installation

Run `yarn install` in your `plugins/example` folder

## Deploy

* Go to your main `8base.yml` file and register your plugin like that

```yaml
plugins:
  - name: example
    path: plugins/example/8base.yml
   ```

* Run `8base deploy -m=FULL` or `8base deploy -m=ONLY_PLUGINS`
