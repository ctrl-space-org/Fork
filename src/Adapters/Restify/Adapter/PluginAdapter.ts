
import { Plugins } from 'server-port'
import { plugins } from 'restify'

export class PluginAdapter implements Plugins {
  public json (): Function[] {
    return plugins.jsonBodyParser()
  }

  public multiPart (): Function {
    return plugins.multipartBodyParser()
  }
}
