import {Iterator as _Iterator} from './Iterator';
import {Collection} from "./Collection";
import {HashCodes} from "../../javaemul/internal/HashCodes";

export class List<E = any> extends Array<E> implements Collection<E>{
    public constructor() {
        super();
    }

    /**
     * Returns the number of elements in this list.  If this list contains
     * more than <tt>Integer.MAX_VALUE</tt> elements, returns
     * <tt>Integer.MAX_VALUE</tt>.
     *
     * @return the number of elements in this list
     */
    public size(): number {
        return this.length;
    }

    /**
     * Returns <tt>true</tt> if this list contains no elements.
     *
     * @return <tt>true</tt> if this list contains no elements
     */
    isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     * Returns <tt>true</tt> if this list contains the specified element.
     * More formally, returns <tt>true</tt> if and only if this list contains
     * at least one element <tt>e</tt> such that
     * <tt>(o==null&nbsp;?&nbsp;e==null&nbsp;:&nbsp;o.equals(e))</tt>.
     *
     * @param o element whose presence in this list is to be tested
     * @return <tt>true</tt> if this list contains the specified element
     * @throws ClassCastException if the type of the specified element
     *         is incompatible with this list
     * (<a href="Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified element is null and this
     *         list does not permit null elements
     * (<a href="Collection.html#optional-restrictions">optional</a>)
     */
    contains(o: any) {
        return this.indexOf(o) !== -1;
    }

    /**
     * Returns an iterator over the elements in this list in proper sequence.
     *
     * @return an iterator over the elements in this list in proper sequence
     */
    iterator(): _Iterator<E> {
        return new List.ListIterator(this);
    }

    /**
     * Returns an array containing all of the elements in this list in
     * proper sequence (from first to last element); the runtime type of
     * the returned array is that of the specified array.  If the list fits
     * in the specified array, it is returned therein.  Otherwise, a new
     * array is allocated with the runtime type of the specified array and
     * the size of this list.
     *
     * <p>If the list fits in the specified array with room to spare (i.e.,
     * the array has more elements than the list), the element in the array
     * immediately following the end of the list is set to <tt>null</tt>.
     * (This is useful in determining the length of the list <i>only</i> if
     * the caller knows that the list does not contain any null elements.)
     *
     * <p>Like the {@link #toArray()} method, this method acts as bridge between
     * array-based and collection-based APIs.  Further, this method allows
     * precise control over the runtime type of the output array, and may,
     * under certain circumstances, be used to save allocation costs.
     *
     * <p>Suppose <tt>x</tt> is a list known to contain only strings.
     * The following code can be used to dump the list into a newly
     * allocated array of <tt>String</tt>:
     *
     * <pre>{@code
     *     String[] y = x.toArray(new String[0]);
     * }</pre>
     *
     * Note that <tt>toArray(new Object[0])</tt> is identical in function to
     * <tt>toArray()</tt>.
     *
     * @param a the array into which the elements of this list are to
     *          be stored, if it is big enough; otherwise, a new array of the
     *          same runtime type is allocated for this purpose.
     * @return an array containing the elements of this list
     * @throws ArrayStoreException if the runtime type of the specified array
     *         is not a supertype of the runtime type of every element in
     *         this list
     * @throws NullPointerException if the specified array is null
     */
    toArray(a?: any): E[] {
        return this;
    }


    // Modification Operations
    /**
     * Inserts the specified element at the specified position in this list
     * (optional operation).  Shifts the element currently at that position
     * (if any) and any subsequent elements to the right (adds one to their
     * indices).
     *
     * @param index index at which the specified element is to be inserted
     * @param element element to be inserted
     * @throws UnsupportedOperationException if the <tt>add</tt> operation
     *         is not supported by this list
     * @throws ClassCastException if the class of the specified element
     *         prevents it from being added to this list
     * @throws NullPointerException if the specified element is null and
     *         this list does not permit null elements
     * @throws IllegalArgumentException if some property of the specified
     *         element prevents it from being added to this list
     * @throws IndexOutOfBoundsException if the index is out of range
     *         (<tt>index &lt; 0 || index &gt; size()</tt>)
     */
    public add(index: number | E, element?: E): boolean {
        if (arguments.length === 1) {
            this.push(<E>index);
            return true;
        }
        this.splice(<number>index, 0, element);
        return true;
    }

    /**
     * Removes the element at the specified position in this list (optional
     * operation).  Shifts any subsequent elements to the left (subtracts one
     * from their indices).  Returns the element that was removed from the
     * list.
     *
     * @param o the index of the element to be removed
     * @return the element previously at the specified position
     * @throws UnsupportedOperationException if the <tt>remove</tt> operation
     *         is not supported by this list
     * @throws IndexOutOfBoundsException if the index is out of range
     *         (<tt>index &lt; 0 || index &gt;= size()</tt>)
     */
    remove(o: number | E): boolean {
        if (typeof o === 'number') {
            this.splice(<number>o, 1);
            return true;
        }
        const index = this.indexOf(<E>o);
        if (index === -1) {
            return false;
        }
        this.splice(index, 1);
        return true;
    }


    // Bulk Modification Operations

    /**
     * Returns <tt>true</tt> if this list contains all of the elements of the
     * specified collection.
     *
     * @param  c collection to be checked for containment in this list
     * @return <tt>true</tt> if this list contains all of the elements of the
     *         specified collection
     * @throws ClassCastException if the types of one or more elements
     *         in the specified collection are incompatible with this
     *         list
     * (<a href="Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified collection contains one
     *         or more null elements and this list does not permit null
     *         elements
     *         (<a href="Collection.html#optional-restrictions">optional</a>),
     *         or if the specified collection is null
     * @see #contains(Object)
     */
    containsAll(c: Collection<any>): boolean {
        for (let i = 0; i < c.size(); i++) {
            if (this.indexOf(c[i]) === -1) {
                return false;
            }
        }
        return true;
    }

    /**
     * Inserts all of the elements in the specified collection into this
     * list at the specified position (optional operation).  Shifts the
     * element currently at that position (if any) and any subsequent
     * elements to the right (increases their indices).  The new elements
     * will appear in this list in the order that they are returned by the
     * specified collection's iterator.  The behavior of this operation is
     * undefined if the specified collection is modified while the
     * operation is in progress.  (Note that this will occur if the specified
     * collection is this list, and it's nonempty.)
     *
     * @param index index at which to insert the first element from the
     *              specified collection
     * @param c collection containing elements to be added to this list
     * @return <tt>true</tt> if this list changed as a result of the call
     * @throws UnsupportedOperationException if the <tt>addAll</tt> operation
     *         is not supported by this list
     * @throws ClassCastException if the class of an element of the specified
     *         collection prevents it from being added to this list
     * @throws NullPointerException if the specified collection contains one
     *         or more null elements and this list does not permit null
     *         elements, or if the specified collection is null
     * @throws IllegalArgumentException if some property of an element of the
     *         specified collection prevents it from being added to this list
     * @throws IndexOutOfBoundsException if the index is out of range
     *         (<tt>index &lt; 0 || index &gt; size()</tt>)
     */
    addAll(c: Collection<any>, index?: number): boolean {
        if (index === undefined) {
            for (let i = 0; i < c.size(); i++) {
                this.push(c[i]);
            }
            return true;
        }
        for (let i = 0; i < c.size(); i++) {
            this.splice(index + i, 0, c[i]);
        }
        return true;
    }

    /**
     * Removes from this list all of its elements that are contained in the
     * specified collection (optional operation).
     *
     * @param c collection containing elements to be removed from this list
     * @return <tt>true</tt> if this list changed as a result of the call
     * @throws UnsupportedOperationException if the <tt>removeAll</tt> operation
     *         is not supported by this list
     * @throws ClassCastException if the class of an element of this list
     *         is incompatible with the specified collection
     * (<a href="Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if this list contains a null element and the
     *         specified collection does not permit null elements
     *         (<a href="Collection.html#optional-restrictions">optional</a>),
     *         or if the specified collection is null
     * @see #remove(Object)
     * @see #contains(Object)
     */
    removeAll(c: Collection<E>): boolean {
        let changed: boolean = false;
        for (let i = 0; i < c.size(); i++) {
            let index = this.indexOf(c[i]);
            if (index === -1) {
                continue;
            }
            changed = true;
            this.splice(index, 1);
        }
        return changed;
    }

    /**
     * Retains only the elements in this list that are contained in the
     * specified collection (optional operation).  In other words, removes
     * from this list all of its elements that are not contained in the
     * specified collection.
     *
     * @param c collection containing elements to be retained in this list
     * @return <tt>true</tt> if this list changed as a result of the call
     * @throws UnsupportedOperationException if the <tt>retainAll</tt> operation
     *         is not supported by this list
     * @throws ClassCastException if the class of an element of this list
     *         is incompatible with the specified collection
     * (<a href="Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if this list contains a null element and the
     *         specified collection does not permit null elements
     *         (<a href="Collection.html#optional-restrictions">optional</a>),
     *         or if the specified collection is null
     * @see #remove(Object)
     * @see #contains(Object)
     */
    retainAll(c: List<any>): boolean {
        let changed: boolean = false;
        for (let i = 0; i < c.length; i++) {
            const index = this.indexOf(c[i]);
            if (index !== -1) {
                continue;
            }
            changed = true;
            this.splice(index, 1);
        }
        return changed;
    }

//
//     /**
//      * Replaces each element of this list with the result of applying the
//      * operator to that element.  Errors or runtime exceptions thrown by
//      * the operator are relayed to the caller.
//      *
//      * @implSpec
//      * The default implementation is equivalent to, for this {@code list}:
//      * <pre>{@code
//      *     final ListIterator<E> li = list.listIterator();
//      *     while (li.hasNext()) {
//      *         li.set(operator.apply(li.next()));
//      *     }
//      * }</pre>
//      *
//      * If the list's list-iterator does not support the {@code set} operation
//      * then an {@code UnsupportedOperationException} will be thrown when
//      * replacing the first element.
//      *
//      * @param operator the operator to apply to each element
//      * @throws UnsupportedOperationException if this list is unmodifiable.
//      *         Implementations may throw this exception if an element
//      *         cannot be replaced or if, in general, modification is not
//      *         supported
//      * @throws NullPointerException if the specified operator is null or
//      *         if the operator result is a null value and this list does
//      *         not permit null elements
//      *         (<a href="Collection.html#optional-restrictions">optional</a>)
//      * @since 1.8
//      */
//     default void replaceAll(UnaryOperator<E> operator) {
//     Objects.requireNonNull(operator);
//     final ListIterator<E> li = this.listIterator();
//     while (li.hasNext()) {
//     li.set(operator.apply(li.next()));
// }
// }
//
// /**
//  * Sorts this list according to the order induced by the specified
//  * {@link Comparator}.
//  *
//  * <p>All elements in this list must be <i>mutually comparable</i> using the
//  * specified comparator (that is, {@code c.compare(e1, e2)} must not throw
//  * a {@code ClassCastException} for any elements {@code e1} and {@code e2}
//  * in the list).
//  *
//  * <p>If the specified comparator is {@code null} then all elements in this
//  * list must implement the {@link Comparable} interface and the elements'
//  * {@linkplain Comparable natural ordering} should be used.
//  *
//  * <p>This list must be modifiable, but need not be resizable.
//  *
//  * @implSpec
//  * The default implementation obtains an array containing all elements in
//  * this list, sorts the array, and iterates over this list resetting each
//  * element from the corresponding position in the array. (This avoids the
//  * n<sup>2</sup> log(n) performance that would result from attempting
//  * to sort a linked list in place.)
//  *
//  * @implNote
//  * This implementation is a stable, adaptive, iterative mergesort that
//  * requires far fewer than n lg(n) comparisons when the input array is
//  * partially sorted, while offering the performance of a traditional
//  * mergesort when the input array is randomly ordered.  If the input array
//  * is nearly sorted, the implementation requires approximately n
//  * comparisons.  Temporary storage requirements vary from a small constant
//  * for nearly sorted input arrays to n/2 object references for randomly
//  * ordered input arrays.
//  *
//  * <p>The implementation takes equal advantage of ascending and
//  * descending order in its input array, and can take advantage of
//  * ascending and descending order in different parts of the same
//  * input array.  It is well-suited to merging two or more sorted arrays:
//  * simply concatenate the arrays and sort the resulting array.
//  *
//  * <p>The implementation was adapted from Tim Peters's list sort for Python
//  * (<a href="http://svn.python.org/projects/python/trunk/Objects/listsort.txt">
//  * TimSort</a>).  It uses techniques from Peter McIlroy's "Optimistic
//  * Sorting and Information Theoretic Complexity", in Proceedings of the
//  * Fourth Annual ACM-SIAM Symposium on Discrete Algorithms, pp 467-474,
//  * January 1993.
//  *
//  * @param c the {@code Comparator} used to compare list elements.
//  *          A {@code null} value indicates that the elements'
//  *          {@linkplain Comparable natural ordering} should be used
//  * @throws ClassCastException if the list contains elements that are not
//  *         <i>mutually comparable</i> using the specified comparator
//  * @throws UnsupportedOperationException if the list's list-iterator does
//  *         not support the {@code set} operation
//  * @throws IllegalArgumentException
//  *         (<a href="Collection.html#optional-restrictions">optional</a>)
//  *         if the comparator is found to violate the {@link Comparator}
//  *         contract
//  * @since 1.8
//  */
// default void sort(Comparator<? super E> c) {
//     Object[] a = this.toArray();
//     Arrays.sort(a, (Comparator) c);
//     ListIterator<E> i = this.listIterator();
//     for (Object e : a) {
//         i.next();
//         i.set((E) e);
//     }
// }

    /**
     * Removes all of the elements from this list (optional operation).
     * The list will be empty after this call returns.
     *
     * @throws UnsupportedOperationException if the <tt>clear</tt> operation
     *         is not supported by this list
     */
    clear(): void {
        this.splice(0, this.length);
    }


// Comparison and hashing

    /**
     * Compares the specified object with this list for equality.  Returns
     * <tt>true</tt> if and only if the specified object is also a list, both
     * lists have the same size, and all corresponding pairs of elements in
     * the two lists are <i>equal</i>.  (Two elements <tt>e1</tt> and
     * <tt>e2</tt> are <i>equal</i> if <tt>(e1==null ? e2==null :
     * e1.equals(e2))</tt>.)  In other words, two lists are defined to be
     * equal if they contain the same elements in the same order.  This
     * definition ensures that the equals method works properly across
     * different implementations of the <tt>List</tt> interface.
     *
     * @param o the object to be compared for equality with this list
     * @return <tt>true</tt> if the specified object is equal to this list
     */
    equals(o: List<any>): boolean {
        if (o === null || o === undefined) {
            return false;
        }
        if (!Array.isArray(o)) {
            return false;
        }
        if (this.length !== o.length) {
            return false;
        }
        for (let i = 0; i < o.length; i++) {
            if (this[i] !== o[i]) {
                return false;
            }
        }
        return true;
    }

    hashCode(): number {
        return HashCodes.getObjectIdentityHashCode(this);
    }

//
// /**
//  * Returns the hash code value for this list.  The hash code of a list
//  * is defined to be the result of the following calculation:
//  * <pre>{@code
//  *     int hashCode = 1;
//      *     for (E e : list)
//      *         hashCode = 31*hashCode + (e==null ? 0 : e.hashCode());
//      * }</pre>
//  * This ensures that <tt>list1.equals(list2)</tt> implies that
//  * <tt>list1.hashCode()==list2.hashCode()</tt> for any two lists,
//  * <tt>list1</tt> and <tt>list2</tt>, as required by the general
//  * contract of {@link Object#hashCode}.
//  *
//  * @return the hash code value for this list
//  * @see Object#equals(Object)
//  * @see #equals(Object)
//  */
// int hashCode();


// Positional Access Operations

    /**
     * Returns the element at the specified position in this list.
     *
     * @param index index of the element to return
     * @return the element at the specified position in this list
     * @throws IndexOutOfBoundsException if the index is out of range
     *         (<tt>index &lt; 0 || index &gt;= size()</tt>)
     */
    get(index: number): E {
        return this[index];
    }

    /**
     * Replaces the element at the specified position in this list with the
     * specified element (optional operation).
     *
     * @param index index of the element to replace
     * @param element element to be stored at the specified position
     * @return the element previously at the specified position
     * @throws UnsupportedOperationException if the <tt>set</tt> operation
     *         is not supported by this list
     * @throws ClassCastException if the class of the specified element
     *         prevents it from being added to this list
     * @throws NullPointerException if the specified element is null and
     *         this list does not permit null elements
     * @throws IllegalArgumentException if some property of the specified
     *         element prevents it from being added to this list
     * @throws IndexOutOfBoundsException if the index is out of range
     *         (<tt>index &lt; 0 || index &gt;= size()</tt>)
     */
    set(index: number, element: E): E {
        const old = this[index];
        this.splice(index, 1, element);
        return old;
    }

    clone(): List<E> {
        const list: List<E> = new List();
        for (let i = 0; i < this.length; i++) {
            list.push(this[i]);
        }
        return list;
    }
}

export namespace List {
    export class ListIterator<E> implements _Iterator<E> {
        cursor: number;
        list: List<E>;

        public constructor(list: List<E>) {
            this.list = list;
            this.cursor = 0;
        }

        hasNext() {
            return this.cursor + 1 < this.list.length;
        }

        next(): E {
            return this[++this.cursor];
        }

        remove(): E {
            const item = this[this.cursor];
            this.list.splice(this.cursor, 1);
            return item;
        }

        forEachRemaining(action: Function): void {
            while (this.hasNext())
                action.call(this.next());
        }

        [Symbol.iterator]() {
            return {
                next: () => {
                    if (this.hasNext()) {
                        return {value: this.next(), done: false};
                    } else {
                        this.cursor = 0;
                        return {value: null, done: true};
                    }
                }
            }
        }
    }
}
List['__class'] = 'java.util.List';