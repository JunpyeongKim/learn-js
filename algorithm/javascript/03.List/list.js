/**
 * List ADT Design
 * - Definition
 *      - 검색 필요없고, 순서가 중요하고 복잡한 자료구조가 아닐 경우 사용 가능
 * - Property
 * - Operation
 *
 * List ADT 를 이용해서 List Class 를 구현
 *
 */

// List Class
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];    // 저장 방법 상관 없다

    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

// 리스트의 다음 가용 위치(listSize 변수 값)에 새 요소를 추가
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// 삭제할 요소를 찾고 -> 삭제후 -> 나머지 요소를 왼쪽으로 이동
// - splice() 이용 : (밧줄의 두 끝을 함께 꼬아서) 잇다
function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }

    return -1;
}

function remove(element) {
    var foundAt = find(element);

    if (foundAt > -1) {
        /*
         http://www.w3schools.com/jsref/jsref_splice.asp
         array.splice(index,howmany,item1,.....,itemX)
         index	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
         howmany	Required. The number of items to be removed. If set to 0, no items will be removed
         item1, ..., itemX	Optional. The new item(s) to be added to the array
         */
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }

    return false;
}

//
function length() {
    return this.listSize;
}

//
function toString() {
    return this.dataStore;
}

// 테스트 프로그램
function test1() {
    var names = new List();
    names.append('Cynthia');
    names.append('Raymond');
    names.append('Barbara');
    console.log(names.toString());
    names.remove('Raymond');
    console.log(names.toString());
}

// 리스트의 기존 요소 뒤에 새로운 요소를 삽입
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }

    return false;
}

// 모든 요소 삭제
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;  //TODO: could it ???
    this.listSize = this.pos = 0;
}

//
function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }

    return false;
}

// 탐색
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

// 테스트
function test2() {
    var names = new List();

    names.append('Clayton');
    names.append('Raymond');
    names.append('Cynthia');
    names.append('Jennifer');
    names.append('Bryan');
    names.append('Danny');

    names.front();
    console.log(names.getElement());

    names.next();
    console.log(names.getElement());

    names.next();
    names.next();
    names.prev();
    console.log(names.getElement());
}

// 반복자를 이용시 장점
// 1. 내부 데이터 저장소가 무엇인지 걱정할 필요가 없다
// 2. 반복자를 갱신할 필요가 없다
// 3. 데이터 저장소 종류가 달라져도 이전과 같은 방식으로 이용 가능
// ==> 리스트를 탐색할때만 반복자를 사용해야 한다
function test3 () {
    var names = new List();

    names.append('Clayton');
    names.append('Raymond');
    names.append('Cynthia');
    names.append('Jennifer');
    names.append('Bryan');
    names.append('Danny');

    names.front();
    console.log(names.getElement());

    names.next();
    console.log(names.getElement());

    names.next();
    names.next();
    names.prev();
    console.log(names.getElement());

    for(names.front(); names.currPos() < names.length(); names.next()) {
        console.log(names.getElement());
    }

    for (names.end(); names.currPos() >= 0; names.prev()) {
        console.log(names.getElement());
    }
}


//--------------------------------------------------------------------------------
// 리스트 기반 애플리케이션 - Redbox와 같은 비디오 대여 상점 운영 시스템
//--------------------------------------------------------------------------------

// 텍스트 파일 읽기
/*
http://www.w3schools.com/jsref/jsref_split.asp
string.split(separator,limit)
 separator	Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item)
 limit	Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array
 */
//var movies = read('films.txt').split('\n'); // 문제점 : \n 이 공백으로 치환된다. --> trim() 필요

function createArr(file) {
    var arr = read(file).split('\n');
    for (var i = 0; i < arr.length; i++) {
        /*
         http://www.w3schools.com/jsref/jsref_trim_string.asp
         string.trim()
         */
        arr[i] = arr[i].trim();
    }

    return arr;
}

var movies = createArr('films.txt');

// 영화 리스트 저장 및 출력
var movieList = new List();
for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()['name'] + ', ' + list.getElement()['movie']);
        } else {
            console.log(list.getElement());
        }
    }
}

// 고객 정보
var customers = new List();

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

// 영화 대여
function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    } else {
        console.log(movie + ' is not available.');
    }
}

//
function test4() {
    var movies = createArr('films.txt');
    var movieList = new List();
    var customers= new List();

    for (var i = 0; i < movies.length; i++) {
        movieList.append(movie[i]);
    }

    console.log('Available movies: \n');
    displayList(movieList);
    checkOut('jane Doe', 'The Godfather', movieList, customers);
    console.log('\nCustomer Rentals: \n');
    displayList(customers);
}

function test5() {
    var movies = createArr('films.txt');
    var movieList = new List();
    var customers= new List();

    for (var i = 0; i < movies.length; i++) {
        movieList.append(movie[i]);
    }

    console.log('Available movies: \n');
    displayList(movieList);

    console.log('\nEnter your name; ');
    var name = readline();

    console.log('What moview would you like? ');
    var movie = readline();

    checkOut(name, movie, movieList, customers);

    console.log('\nCustomer Rentals: \n');
    displayList(customers);

    console.log('\nMovies Now Available\n');
    displayList(movieList);
}