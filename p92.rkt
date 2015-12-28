#lang racket


(define index 0)

(define (power-of-each-digits n)
  (cond
    [(< n 10) (* n n)]
    [else (+ (expt (remainder n 10) 2) (power-of-each-digits (quotient n 10)))]))

(define (chain n)
  (cond
    [(equal? n 89) 1]
    [(equal? n 1) 0]
    [else (chain (power-of-each-digits n))]))

(define (check n c)
  (cond
    [(equal? n 10000001) c]
    [else (check (add1 n) (+ c (chain n)))]))

(check 1 0)
