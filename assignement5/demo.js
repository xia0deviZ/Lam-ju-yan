const p = Promise.reject(new Error('Invalid value'));

p.catch(() => 0).then(console.log);