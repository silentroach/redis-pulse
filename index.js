module.exports = function(client, { timeout = 60000 } = { }) {
	let timer;

	function ping() {
		client.ping();
		check();
	}

	function check() {
		if (timer) {
			clearTimeout(timer);
		}

		if (client.connected) {
			timer = setTimeout(ping, timeout).unref();
		}
	}

	client
		.on('ready', check)
		.on('end', check);

	return client;
};
