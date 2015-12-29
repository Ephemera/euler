#lang racket

(define matrix (map (lambda (x) (map string->number (string-split x ","))) (file->lines "p081_matrix.txt")))
(define len-matrix (length matrix))
(define cache (hash))

(define (number->symbol x y)
  (string->symbol (format "~a,~a" x y)))

(define (check x y)
  (cond
    [(and (= x 0) (= y 0)) (list-ref (list-ref matrix 0) 0)]
    [(= x 0)
     (+ (check x (sub1 y))(list-ref (list-ref matrix x) y))]
    [(= y 0)
     (+ (check (sub1 x) y)(list-ref (list-ref matrix x) y))]
    [else
      (cond
        [(hash-has-key? cache (number->symbol x y))
          (+ (hash-ref cache (number->symbol x y)) (list-ref (list-ref matrix x) y))]
        [else
          (define m (min
              (check (sub1 x) y)
              (check x (sub1 y))))
          (set! cache (hash-set cache (number->symbol x y) m))
          (+ m (list-ref (list-ref matrix x) y))])]))

(check (sub1 len-matrix) (sub1 len-matrix))
