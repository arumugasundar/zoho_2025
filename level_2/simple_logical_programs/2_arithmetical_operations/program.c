#include<stdio.h>
int main(){
    int m, n;
    printf("Enter the value for M : ");
    scanf("%d", &m);
    printf("Enter the value of N : ");
    scanf("%d", &n);

    printf("\nAddition of %d and %d is %d", m,n,m+n);
    printf("\nSubtraction of %d and %d is %d", m,n,m-n);
    printf("\nMultiplication of %d and %d is %d", m,n,m*n);
    printf("\nDivision of %d and %d is %d\n", m,n,m/n);

    return 0;
}