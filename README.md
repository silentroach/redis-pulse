# Redis Pulse

[![npm](https://img.shields.io/npm/v/redis-pulse.svg?style=flat-square)](https://www.npmjs.com/package/redis-pulse)

Simple redis heartbeat. It will send `ping` command to connection repeatedly while it is open.

Depends on `redis` npm package as a peer.

## Installation

	npm i redis-pulse --save

## API

Module is just one method, that will get your connection as an argument and return it.

`pulse(redisClient, options)`

* `redisClient` - any redis client (`redis.creteClient()` result)
* `options`
	* `timeout` - time in ms between pings

## Example

Just that simple:

	const redis = require('redis');
	const pulse = require('redis-pulse');

	const client = pulse(redis.createClient());
