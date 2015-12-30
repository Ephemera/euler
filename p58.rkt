#lang racket
(require math/number-theory)

(define (is-prime? current n)
  (cond
    [(prime? (+ current (* n 2))) 1]
    [else 0]))

(define (solve n cnt current ratio)
  (cond
    [(and (< (/ ratio (add1 (* n 4))) 0.1) (< cnt 0)) (add1 (* n 2))]
    [(< cnt 0) (solve (add1 n) 3 current ratio)]
    [else (solve n (sub1 cnt) (+ current (* n 2)) (+ ratio (is-prime? current n)))]))

(solve 1 3 1 0)

