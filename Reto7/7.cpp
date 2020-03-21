#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;

int solution(vector<int> &A){
    int Minimo= 10000000;
    int N=A.size();

    for(int P = 1; P < N; P++){
        vector<int> parte1(A.begin(),A.end()-(N-P));
        vector<int> parte2(A.begin()-P,A.end());

        int suma1=0;
        int suma2=0;

        for(int i=0;i<parte1.size();i++){
            suma1=suma1 + parte1[i];

        }

        for (int i=0;i<parte2.size();i--){
            suma2=suma2 + parte2[i];

        }

        int valoractual = abs(suma1-suma2);

    }

}
int main(){
    vector <int> A={3, 1, 2, 4, 3};
    cout << solution(A) <<endl;

}


//Array A (No vacio) de N enteros
//0<P< N
//Array A (No vacio) de 5 enteros
//0<3< 5

//Se va a dividir en 2 partes
//Parte 1: A[0], A[1], ...A[P-1]
//Parte 2: A[P], A[P+1], ...A[N-1]
//se obtiene la diferencia absoluta de la suma de ambas partes
// Y se quiere obtener el valor minimo de todas las deferencias absolutas posible

//Se va a dividir en 2 partes
//Parte 1: A[0], A[1],A[2]
//Parte 2: A[3], A[4]
//Si P==1

//LA CINTA SE VA DIVIDIR En 2 Partes
//Parte 1: A[0]
//Parte 2: A[1],A[2],A[3],A[4]

//Si P==3
//LA CINTA SE VA DIVIDIR En 2 Partes
//Parte 1: A[0],A[1],A[2]
//Parte 2: A[3],A[4]

//Se obtiene los resultados posibles 7,5,1,7
//se obtiene la diferencia absoluta de la suma de ambas partes
// Y se quiere obtener el valor minimo de todas las deferencias absolutas posible

//codigo beta
//A=[3,1,2,4,3]
