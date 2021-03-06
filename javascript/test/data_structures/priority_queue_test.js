var assert = require('assert');
var naivePQ = require('../../data_structures/priority_queue.js').naive;
var naiveMinPQ = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
  return a < b;
});
var binaryHeapPQ = require('../../data_structures/priority_queue.js').binaryHeap;
var binomialHeapPQ = require('../../data_structures/priority_queue.js').binomialHeap;
var fibonacciHeapPQ = require('../../data_structures/priority_queue.js').fibonacciHeap;

describe('Naive Max Priority Queue', function() {

  describe('with no priority set', function() {

    describe('#enqueue()', function() {
      var queue = new naivePQ();
      it("queue has one item on it", function() {
        queue.enqueue(42);
        assert.deepEqual(queue.items[0].value, 42);
        assert.equal(queue.items.length, 1);
      });
    });

    describe('#peek()', function() {
      var queue = new naivePQ();
      it("returns top item value", function() {
        queue.enqueue(42);
        assert.equal(queue.peek(), 42);
      });
    });

    describe('#dequeue()', function() {
      var queue = new naivePQ();
      queue.enqueue(42).enqueue(75).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.items.length, 3);
        queue.dequeue();
        assert.deepEqual(queue.items.map(function(a) {
          return a.value;
        }), [75, 22]);
        assert.equal(queue.items.length, 2);
      });
    });
  });

  describe('with priority', function() {

    describe('#enqueue()', function() {
      var queue = new naivePQ();
      it("queue has one item on it with a priority", function() {
        queue.enqueue(42, 1);
        assert.deepEqual(queue.items[0].value, 42);
        assert.deepEqual(queue.items[0].priority, 1);
        assert.equal(queue.items.length, 1);
      });
    });

    describe('#peek()', function() {
      var queue = new naivePQ();
      it("returns top prority item", function() {
        queue.enqueue(42).enqueue(14, 5);
        assert.equal(queue.peek(), 14);
      });
    });

    describe('#dequeue()', function() {
      var queue = new naivePQ();
      queue.enqueue(42).enqueue(75, 10).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.items.length, 3);
        queue.dequeue();
        assert.deepEqual(queue.items.map(function(a) {
          return a.value;
        }), [42, 22]);
        assert.equal(queue.peek(), 42);
        assert.equal(queue.items.length, 2);
      });
    });
  });

});

describe('Naive Min Priority Queue', function() {

  describe('with no priority set', function() {

    describe('#enqueue()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      it("queue has one item on it", function() {
        queue.enqueue(42);
        assert.deepEqual(queue.items[0].value, 42);
        assert.equal(queue.items.length, 1);
      });
    });

    describe('#peek()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      it("returns top item value", function() {
        queue.enqueue(42);
        assert.equal(queue.peek(), 42);
      });
    });

    describe('#dequeue()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      queue.enqueue(42).enqueue(75).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.items.length, 3);
        queue.dequeue();
        assert.deepEqual(queue.items.map(function(a) {
          return a.value;
        }), [75, 22]);
        assert.equal(queue.items.length, 2);
      });
    });
  });

  describe('with priority', function() {

    describe('#enqueue()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      it("queue has one item on it with a priority", function() {
        queue.enqueue(42, 1);
        assert.deepEqual(queue.items[0].value, 42);
        assert.deepEqual(queue.items[0].priority, 1);
        assert.equal(queue.items.length, 1);
      });
    });

    describe('#peek()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      it("returns lowest prority item", function() {
        queue.enqueue(42).enqueue(14, -1);
        assert.equal(queue.peek(), 14);
      });
    });

    describe('#dequeue()', function() {
      var queue = new naivePQ(Number.POSITIVE_INFINITY, function(a, b) {
        return a < b;
      });
      queue.enqueue(42).enqueue(75, -10).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.items.length, 3);
        queue.dequeue();
        assert.deepEqual(queue.items.map(function(a) {
          return a.value;
        }), [42, 22]);
        assert.equal(queue.peek(), 42);
        assert.equal(queue.items.length, 2);
      });
    });
  });

});

describe('Priority Queue with Binary Heap', function() {

  describe('with no priority set', function() {

    describe('#enqueue()', function() {
      var queue = new binaryHeapPQ();
      it("queue has one item on it", function() {
        queue.enqueue(42);
        assert.deepEqual(queue.heap.items[0].value, 42);
        assert.equal(queue.size(), 1);
      });
    });

    describe('#peek()', function() {
      var queue = new binaryHeapPQ();
      it("returns top item value", function() {
        queue.enqueue(42);
        assert.equal(queue.peek(), 42);
      });
    });

    describe('#dequeue()', function() {
      var queue = new binaryHeapPQ();
      queue.enqueue(42).enqueue(75).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.size(), 3);
        var oldTop = queue.dequeue();
        // stucture of heap is already tests in binary heap test
        assert.equal(oldTop, 42);
        assert.equal(queue.peek(), 75);
        assert.equal(queue.size(), 2);
      });
    });
  });

  describe('with priority', function() {

    describe('#enqueue()', function() {
      var queue = new binaryHeapPQ();
      it("queue has one item on it with a priority", function() {
        queue.enqueue(42, 1);
        assert.deepEqual(queue.heap.items[0].value, 42);
        assert.deepEqual(queue.heap.items[0].priority, 1);
        assert.equal(queue.size(), 1);
      });
    });

    describe('#peek()', function() {
      var queue = new binaryHeapPQ();
      it("returns top prority item", function() {
        queue.enqueue(42).enqueue(14, 5);
        assert.equal(queue.peek(), 14);
      });
    });

    describe('#dequeue()', function() {

      it("removes items", function() {
        var queue = new binaryHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(22);

        assert.equal(queue.size(), 3);
        var oldTop = queue.dequeue();
        assert.equal(oldTop, 75);
        assert.equal(queue.peek(), 42);
        assert.equal(queue.size(), 2);
      });

      it("removes correctly when there are a bunch", function() {
        var queue = new binaryHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(27);
        queue.enqueue(34).enqueue(60).enqueue(27);

        queue.dequeue();
        assert.equal(queue.peek(), 42);
      });
    });

    describe('#changePriority()', function() {
      describe("updates the prority of an item", function() {
        it("without supplying and order", function() {
          var queue = new binaryHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27);
          assert.equal(queue.peek(), 42);
          assert.equal(queue.heap.items[0].priority, 27);
        });
        it("with an order supplied", function() {
          var queue = new binaryHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27, 0);
          assert.equal(queue.peek(), 42);
          assert.equal(queue.heap.items[0].priority, 27);
        });
      });
    });
  });

});

describe('Priority Queue with Binomial Heap', function() {

  describe('with no priority set', function() {

    // one of the properties of a binomial heap is you cannot be sure 
    // that the root is the min value so no need to test enqueue and peek seperately
    // 
    // of course it will be in the first test because there is only one item

    describe('#enqueue and #peek()', function() {
      var queue = new binomialHeapPQ();
      it("returns top item value", function() {
        queue.enqueue(42);
        assert.equal(queue.peek().value, 42);
      });
    });

    describe('#dequeue()', function() {
      var queue = new binomialHeapPQ();
      queue.enqueue(42).enqueue(75).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.size(), 3);
        queue.dequeue();
        // stucture of heap is already tests in binary heap test
        assert.equal(queue.peek().value, 75);
        assert.equal(queue.size(), 2);
      });
    });
  });

  describe('with priority', function() {

    describe('#enqueue()', function() {
      var queue = new binomialHeapPQ();
      it("queue has one item on it with a priority", function() {
        queue.enqueue(42, 1);
        assert.deepEqual(queue.peek().value, 42);
        assert.deepEqual(queue.peek().priority, 1);
        assert.equal(queue.size(), 1);
      });
    });

    describe('#peek()', function() {
      var queue = new binomialHeapPQ();
      it("returns top prority item", function() {
        queue.enqueue(42).enqueue(14, 5);
        assert.equal(queue.peek().value, 14);
      });
    });

    describe('#dequeue()', function() {

      it("removes items", function() {
        var queue = new binomialHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(22);

        assert.equal(queue.size(), 3);
        queue.dequeue();
        assert.equal(queue.peek().value, 42);
        assert.equal(queue.size(), 2);
      });

      it("removes correctly when there are a bunch", function() {
        var queue = new binomialHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(27);
        queue.enqueue(34).enqueue(60).enqueue(27);

        queue.dequeue();
        assert.equal(queue.peek().value, 42);
      });
    });

    describe('#changePriority()', function() {
      describe("updates the prority of an item", function() {
        it("without supplying and order", function() {
          var queue = new binomialHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27);
          assert.equal(queue.peek().value, 42);
          assert.equal(queue.peek().priority, 27);
        });
        it("with an order supplied", function() {
          var queue = new binomialHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27, 0);
          assert.equal(queue.peek().value, 42);
          assert.equal(queue.peek().priority, 27);
        });
      });
    });
  });

});

describe('Priority Queue with Fibonacci Heap', function() {

  describe('with no priority set', function() {

    // in a fib heap you only ever keep a pointer to the min node
    // so again not interesting to test enqueue and peek of one value separately

    describe('#enqueue and #peek()', function() {
      var queue = new fibonacciHeapPQ();
      it("returns top item value", function() {
        queue.enqueue(42);
        assert.equal(queue.peek().value, 42);
      });
    });

    describe('#dequeue()', function() {
      var queue = new fibonacciHeapPQ();
      queue.enqueue(42).enqueue(75).enqueue(22);

      it("removes items", function() {
        assert.equal(queue.size(), 3);
        queue.dequeue();
        // stucture of heap is already tests in binary heap test
        assert.equal(queue.peek().value, 75);
        assert.equal(queue.size(), 2);
      });
    });
  });

  describe('with priority', function() {

    describe('#enqueue()', function() {
      var queue = new fibonacciHeapPQ();
      it("queue has one item on it with a priority", function() {
        queue.enqueue(42, 1);
        assert.deepEqual(queue.peek().value, 42);
        assert.deepEqual(queue.peek().priority, 1);
        assert.equal(queue.size(), 1);
      });
    });

    describe('#peek()', function() {
      var queue = new fibonacciHeapPQ();
      it("returns top prority item", function() {
        queue.enqueue(42).enqueue(14, 5);
        assert.equal(queue.peek().value, 14);
      });
    });

    describe('#dequeue()', function() {

      it("removes items", function() {
        var queue = new fibonacciHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(22);

        assert.equal(queue.size(), 3);
        queue.dequeue();
        assert.equal(queue.peek().value, 42);
        assert.equal(queue.size(), 2);
      });

      it("removes correctly when there are a bunch", function() {
        var queue = new fibonacciHeapPQ();
        queue.enqueue(42).enqueue(75, 10).enqueue(27);
        queue.enqueue(34).enqueue(60).enqueue(27);

        queue.dequeue();
        assert.equal(queue.peek().value, 42);
      });
    });

    describe('#changePriority()', function() {
      describe("updates the prority of an item", function() {
        it("without supplying and order", function() {
          var queue = new fibonacciHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27);
          assert.equal(queue.peek().value, 42);
          assert.equal(queue.peek().priority, 27);
        });
        it("with an order supplied", function() {
          var queue = new fibonacciHeapPQ();
          queue.enqueue(42).enqueue(14, 5);
          queue.changePriority(42, 27, 0);
          assert.equal(queue.peek().value, 42);
          assert.equal(queue.peek().priority, 27);
        });
      });
    });
  });

});
