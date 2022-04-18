import Sleep from "../Sleep";
import Swap from "../Swap";

const HeapSort = async (arr, Animate) => {

  const BuildMaxHeap = async (arr) => {
    // Get index of the middle element
    let i = Math.floor(arr.length / 2 - 1);

    // Build a max heap out of
    // All array elements passed in
    while (i >= 0) {
      await Heapify(arr, i, arr.length);
      i -= 1;
    }
  }
  const Heapify = async (heap, i, max) => {
    let index;
    let leftChild;
    let rightChild;

    while (i < max) {
      index = i;

      // Get the left child index 
      // Using the known formula
      leftChild = 2 * i + 1;

      // Get the right child index 
      // Using the known formula
      rightChild = leftChild + 1;

      // If the left child is not last element 
      // And its value is bigger
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      // If the right child is not last element 
      // And its value is bigger
      if (rightChild < max && heap[rightChild] > heap[index]) {
        index = rightChild;
      }

      // If none of the above conditions is true
      // Just return
      if (index === i) {
        return;
      }

      // Else swap elements
      Swap(heap, i, index);
      await Sleep(4)
      Animate(arr, { e1: i, e2: index }, true)

      // Continue by using the swapped index
      i = index;
    }
  }
  // Build max heap
  await BuildMaxHeap(arr);

  // Get the index of the last element
  let lastElement = arr.length - 1;

  // Continue heap sorting until we have
  // One element left
  while (lastElement > 0) {
    Swap(arr, 0, lastElement);
    await Sleep(4)
    Animate(arr, { e1: 0, e2: lastElement }, true)
    await Heapify(arr, 0, lastElement);
    lastElement -= 1;
  }

  // Return sorted array
  Animate(arr, { e1: null, e2: null }, false)
  return arr;
}

export default HeapSort;