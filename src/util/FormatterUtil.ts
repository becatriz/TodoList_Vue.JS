
export default class FormatterUtil{

    static formatarData(data: string){
      
            //new Date(data);
            let convertida = new Date(data);
            let dia = convertida.getDate() + 1;
            let mes = convertida.getMonth() + 1;
            let ano = convertida.getFullYear();

            return `${dia}/${mes}/${ano}`
        }
    


}