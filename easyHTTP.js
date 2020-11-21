// start with Ajax and ES5 prototypes

function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
EasyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // we defined 'that' here just to be able to use inside the scope of other functions like the one below
    let that = this;
     
    // we can use arrow function instead of regular function because arrow function can add lexical 'this'
    this.http.onload = function() {
        if(that.http.status === 200) {
            callback(null, that.http.responseText);
        } else {
            callback(`Error: ${that.http.status}`);
        }
    }

    this.http.send();
}


// Make an HTTP POST Request
// this accepts data as a param to be added
EasyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    // instead of the arrow function
    let that = this;
    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = function() {
        // null param is for the error
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
// this accepts data as a param to override the old data
EasyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);

    // instead of the arrow function
    let that = this;

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = function() {
        callback(null, that.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request

EasyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let that = this;
    this.http.onload = function() {
        if(that.http.status === 200) {
            callback(null, 'POST Deleted')
        } else {
            callback(`ERROR =: ${that.http.status}`)
        }
    }

    this.http.send();
}