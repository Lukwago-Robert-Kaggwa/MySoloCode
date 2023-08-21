document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			queueLen: 0,
			taxiQueueLen: 0,

			init() {
				this.queueLength()
				this.taxiQueueLength()
			},

			joinQueue() {
				axios
					.post('/api/passenger/join')
					.then((result) => {
						console.log(result.data.message);
					})

				this.queueLength()
				this.taxiQueueLength()
			},


			leaveQueue() {
				axios
					.post('/api/passenger/leave')
					.then((result) => {
						console.log(result.data.message);
					})

				this.queueLength()
				this.taxiQueueLength()
			},

			joinTaxiQueue() {
				axios
					.post('/api/taxi/join')
					.then((result) => {
						console.log(result.data.message);
					})

				this.queueLength()
				this.taxiQueueLength()
			},

			taxiQueueLength() {
				axios
					.get('/api/taxi/queue')
					.then((result) => {
						this.taxiQueueLen = result.data.queueCount
					})		
			},

			queueLength() {
				axios
					.get('/api/passenger/queue')
					.then((result) => {
						this.queueLen = result.data.queueCount
					})
			},

			taxiDepart() {
				axios
					.post('/api/taxi/depart')
					.then((result) => {
						console.log(result.data.message);
					})

				this.queueLength()
				this.taxiQueueLength()
			}
		}
	});

});


