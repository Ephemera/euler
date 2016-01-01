#lang racket

(define base (map (lambda (x) (map string->number (string-split x ","))) (file->lines "p099_base_exp.txt")))
(define greatest 0)
(define result 0)

(for ([i (in-range (length base))])
  (cond
    [(< greatest (* (last (list-ref base i)) (log (first (list-ref base i))))) 
      (set! greatest (* (last (list-ref base i)) (log (first (list-ref base i)))))
      (set! result i) ]))

(write result)
