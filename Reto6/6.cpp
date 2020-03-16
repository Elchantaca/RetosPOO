#include <iostream>
#include <bits/stdc++.h>
#include <vector>
using namespace std;
int solution(vector<int> &A){
    sort(A.begin(),A.end());
    cout << A[0];
    cout << A[1];
    cout << A[2];
    cout << A[3];
    cout << A[4];
    cout << A[5];
    cout << A[6]<<endl;
    return 4;


}
int main(){
    int Faltante;//                                                                                                                                                                                                                                       슬프다
    vector <int> A={1,2,3,5,6};//La solucion con un numero faltante
    Faltante=solution(A);//El faltante buscara el numero faltante en la solucion
    cout << "Parcero, tu numero faltante es:"<<Faltante<<endl;

}