
import { Plugins } from 'server-port'
import express from 'express'
import { injectable } from 'inversify'
import 'reflect-metadata'

@injectable()
export class PluginAdapter implements Plugins {
  public json (): Function {
    return express.json()
  }

  public multiPart (): Function {
    return express.urlencoded({ extended: true })
  }
}
