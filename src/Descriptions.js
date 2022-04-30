const Descriptions = ({ sortType }) => {
  if (sortType === "BubbleSort") {
    return (
      <div>
        <p>
          <b>Bubble Sort</b> is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
        </p>
        <p>
          This simple algorithm performs poorly in real world use and is used primarily as an educational tool.
        </p>
      </div>
    );
  }
  else if (sortType === "SelectionSort") {
    return (
      <div>
        <p>
          <b>Selection Sort</b> divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. The algorithm proceeds by finding the smallest element in the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right. </p>
        <p>
          Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
        </p>
      </div>
    );
  }
  else if (sortType === "InsertionSort") {
    return (
      <div id="selection">
        <p>
        <b>Insertion Sort</b> is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages:
        </p>
        <p>
        <ul>
          <li>
          &#8226; Simple implementation
          </li>
          <li>
          &#8226; Efficient for small data sets
          </li>
          <li>
          &#8226; Adaptive, i.e., efficient for data sets that are already substantially sorted
          </li>
          <li>
          &#8226; Stable
          </li>
          <li>
          &#8226; In-place
          </li>
          <li>
          &#8226; Online; i.e., can sort a list as it receives it
          </li>
        </ul>
        </p>
      </div>
    );
  }
  else if (sortType === "MergeSort") {
    return (
      <div id="merge">
        <p>
        <b>Merge Sort</b> is an efficient, general-purpose, and comparison-based sorting algorithm. Merge sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945. Conceptually, a merge sort works as follows:
        </p>
        <p>
        <ol>
          <li>
            1. divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
          </li>
          <li>
            2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
          </li>
        </ol>
        </p>
      </div>
    );
  }
  else if (sortType === "HeapSort") {
    return (
      <div>
        <p>
        <b>Heap Sort</b> is a comparison-based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the minimum element and place the minimum element at the beginning. We repeat the same process for the remaining elements.
        </p>
        <p>
        Although somewhat slower in practice on most machines than a well-implemented quicksort, it has the advantage of a more favorable worst-case runtime. Heapsort is an in-place algorithm, but it is not a stable sort.
        </p>
      </div>
    );
  }
  else if (sortType === "QuickSort") {
    return (
      <div>
        <p>
        <b>Quick Sort</b> is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.
        </p>
        <p>
        When implemented well, it can be somewhat faster than merge sort and about two or three times faster than heapsort.
        </p>
      </div>
    );
  }
}

export default Descriptions;