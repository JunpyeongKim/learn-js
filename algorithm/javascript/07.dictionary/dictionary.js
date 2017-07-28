/**
 *
 * Dictionary
 *  - 데이터를 Key-Value pair 로 저장하는 자료 구조
 *  - Object 클래스는 dictionary 형식으로 동작하도록 설계되어 있다
 *
 * Dictionary 클래스
 *  - 내부적으로 Array 클래스를 이용한다.
 *  - 키를 이용해 값을 얻는 것이 Dictionary 의 핵심 기능이다.
 */


function Dictionary() {
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.showAllSort = showAllSort;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    console.log('showAll: ' + Object.keys(this.datastore));

    for (var key in this.datastore) {
        console.log(key + ' -> ' + this.datastore[key]);
    }
}

function showAllSort() {
    console.log('showAllSort: ' + Object.keys(this.datastore).sort());

    for (var key in this.datastore.sort()) {
        console.log(key + ' -> ' + this.datastore[key]);
    }
}

// length Property 미사용 이유 --> 문자열 키에서는 제대로 동작하지 않기 때문에.
function count() {
    var n = 0;
    for (var key in this.datastore) {
        n++;
    }

    console.log(Object.keys(this.datastore).length);
    return n;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}


//----------------------------------------------------------------
// Test
//----------------------------------------------------------------

// load('Dictionary.js')
var pbook = new Dictionary();

pbook.add('Raymond', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
pbook.add('Mike', '723');
pbook.add('Jennifer', '987');
pbook.add('Danny', '012');
pbook.add('Jonathan', '666');

console.log('Number of entries: ' + pbook.count());
console.log("David's extension: " + pbook.find('David'));

pbook.remove('David');
pbook.showAll();
pbook.showAllSort();
pbook.clear();

console.log('Number of entries: ' + pbook.count());

var a = new Array();
a[0] = 'Mike';
a[1] = 'David';
console.log(a); // Mike, David
a.sort();
console.log(a); // David, Mike


// 문제
// Dictionary 를 이용하여 'the brown fox jumped over the blue fox' 에서 단어가 몇 번 나오는지 체크 --> 결과를 정렬