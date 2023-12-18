const cluster = require('cluster')
import * as os from 'os'

import { Injectable } from '@nestjs/common'

const numCPUs = process.env.NODE_ENV === 'local' ? 1 : os.cpus().length

@Injectable()
export class AppClusterService {
  static clusterize(callback: Function): void {
    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`)
      for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork()
      }
      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
      })
    } else {
      callback()
    }
  }
}