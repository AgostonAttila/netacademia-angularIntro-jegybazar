export class UserModel {
    id: number;
    name: string;
    email: string;
    address: string;
    dateOfBirth: string;
    gender: string;


    constructor(param?: UserModel) {
        if (param) {
            Object.assign(this, param);
        }
    }

    
    //UserModel.exampleUser
    static get exampleUser(): UserModel {
        return {
            id: 0,
            name: 'Réka Matilda',
            email: 'legyek@vmi.com',
            address: 'Straferr utca',
            dateOfBirth: '2018.01.01',
            gender: 'female'
        };
    }

    static get emptyUser(): UserModel {
            return {
              id: 0,
              name: '',
              email: '',
              address: '',
              dateOfBirth: '',
              gender: ''
            };
          }
}
