function shortcut(s1, s2) {
	// let a="";
	// if(s1!='' || s2!=''){
	// 	return '';
	// }
	// else
	// {
	// 	a=s1.charAt+ s2.charAt(0);
	// 	return a;
	// }
	return s1[0]+s2[0];
}

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));