export function required(errorMessage: string = "Champs Requis"){
    return (v: any) => !!v || errorMessage;
};

export function minLength(length: number, errorMessage: string = `Veuillez entrer ${length} caractères minimum`){
    return (v: any) => String(v).length >= length || errorMessage;
};

export function maxLength(length: number, errorMessage: string = `Veuillez entrer ${length} caractères maximium`){
    return (v: any) => String(v).length <= length || errorMessage;
};

export function isEmail(errorMessage:string = "Veuillez entrer une addresse email valide"){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (v:any) => re.test(String(v).toLowerCase()) || errorMessage;
}

    