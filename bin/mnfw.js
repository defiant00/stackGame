/* Built with Minet Compiler 1.0 RC5 on 5/17/2016 10:44:10 AM
 * Input Files: storage.mn, using.mn
 */

// Classes
var MNFW = (function() {
	function MNFW() {
	}
	MNFW.Storage = (function() {
		function Storage(dbName, onSuccess) {
			var _t = this;
			var r = window.indexedDB.open(dbName, 1);
			this.name = dbName;
			r.onerror = function(e) {
				console.log(e);
			};
			r.onsuccess = function(e) {
				_t.db = e.target.result;
				_t.db.onerror = function(ev) {
					console.log(ev);
				};
				onSuccess();
			};
			r.onupgradeneeded = function(e) {
				e.target.result.createObjectStore(dbName, {keyPath:'key'});
			};
		}
		Storage.prototype.Get = function(key, onSuccess) {
			((this.db.transaction(this.name).objectStore(this.name)).get(key)).onsuccess = function(e) {
				onSuccess((e.target.result ? e.target.result.value : undefined));
			};
		};
		Storage.prototype.Set = function(key, val) {
			var os = this.db.transaction([this.name], 'readwrite').objectStore(this.name);
			os.get(key).onsuccess = function(e) {
				if (e.target.result) {
					os.put({key:key, value:val});
				} else {
					os.add({key:key, value:val});
				}
			};
		};
		Storage.prototype.Delete = function(key) {
			this.db.transaction([this.name], 'readwrite').objectStore(this.name)['delete'](key);
		};
		return Storage;
	})();
	return MNFW;
})();
