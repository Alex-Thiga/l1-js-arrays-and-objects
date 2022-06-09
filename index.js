// Utility
function print(value){
    console.info(value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const array1 = [1,2,3,4,5,6,7,8,9,10]
    // return the array
    return array1
}
// display value
print(`Scores Array: ${scores()}`)



// TODO: Access an element from the array
function accessScore(index){
    // using array above access the 3rd element
    const values = scores();
    const display = values[index]
    // return the elememt
    return display
}
// display value
print(`Third Score: ${accessScore(4)}`)


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const array2 = [ [2,3],[4,5,6],10]
    // return the nested arrays
    return array2[1][2]
}
// display value
print(`Nested Score Array: ${nestedScores()}`)


// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
    const getLength = scores()
    const displayLength = getLength.length
    // return the number of elements
    return displayLength
}
// display value
 print(`Number of elements: ${getNumberOfScores()}`)


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
    const newScores = scores()
    const showScores = [...newScores,20,3,4]
    // return the new array with the elements that have been added
    return showScores
}
// display value
 print(`Added elements: ${addElement()}`)



// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
    const studentX={
        name: 'Alex',
        age: 20,
        email: 'alexthiga98@gmail.com',
        isKenyan : true
    
        
    }
    print(studentX)
    // return student object
    return studentX
}
// display value
print( `Student: ${ student() }` )
print(`Student: ${JSON.stringify(student())}`);

// TODO: Access student's age
function studentAge(){
    // access student age using key
    const result = student()
    const showAge = result['age']

    // return student age
    return showAge
}
// display value
print( `Student Age: ${ studentAge() }` )


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    const result = student();
    const showEmail = result.email;

    // return student email
    return showEmail
}
// display value
 print(`Student Email: ${studentEmail()}`)


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const userA = {
        id: 3456699,
        name: 'Alex',
        course: {
            name: 'js',
            number : 250
        }
    }
    print(userA.course.name)
    // return user object
    return userA
}
// display value
 print(`User: ${user()}`)


// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries
    const displayEntries = Object.entries(user())

    // return entries
return displayEntries
}
// display value
// print(`User Entries: ${getUserEntries()}`)


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys


    // return keys

}
// display value
// print(`User Keys: ${getUserKeys()}`)

