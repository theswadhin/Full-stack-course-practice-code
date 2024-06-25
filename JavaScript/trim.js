
//str.trim()
//This method returns a new string, without any of the leading or the trailing white spaces. 

function func() {
    var str = "  GeeksforGeeks      ";
    var st = str.trim();
    var stL = str.trimLeft();
    var stR = str.trimRight();
    console.log(str);
    console.log(stL);
    console.log(stR);
    console.log(st);
}
func();
