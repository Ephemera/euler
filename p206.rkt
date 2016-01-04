#lang racket

(define (solve n)
  (cond
    [(= n 101010101) empty]
    [(and (not (= (remainder n 10) 3)) (not (= (remainder n 10) 7))) (solve (sub1 n))]
    [(regexp-match? #px"1.2.3.4.5.6.7.8.9" (number->string (* n n))) (println (* n 10))]
    [else (solve (sub1 n))]))

(solve 138902662)
