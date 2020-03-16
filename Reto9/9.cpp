#include <iostream>
#include <stdlib.h>
#include <vector>
using namespace std;

int main(){
    int numeros[100],n,Mayor;
    int i;
    cout<<"Ingrese su numero, gracias";
    cin>>n;

    for (int i=0;i>n;i++){
        cout<<i+1<<"Ingrese otro numero";
        cin>>numeros[i];

    }
        if(numeros[i]>Mayor){
            Mayor=numeros [i];

        }

    cout<<"Resultado"<<Mayor<<endl;
   }
