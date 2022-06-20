//Palindrome Linked List leetcode.com/problems/palindrome-linked-list/
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let second = slow.next;
    slow.next = null;
    let prev = null;
    while (second) {
        let next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    let first = head;
    while (first && prev) {
        if (first.val !== prev.val) return false;
        first = first.next;
        prev = prev.next;
    }
    return true;
}


var isPalindrome = function (head) {
    // Store all values from the linked list in an array
    let valuesFound = [];
    while (head) {
        valuesFound.push(head.val);
        head = head.next;
    }

    // Check if the list of values are a palindrome
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++, right--;
    }

    return true;
};


var isPalindrome = function (head) {
    function isPalindromRecursive(recursiveHead) {
        // Reached the end of the list
        if (recursiveHead == null) {
            return true;
        }

        // Recursively traverse the linked list
        const next = isPalindromRecursive(recursiveHead.next);

        // Check if the current level of the linked list mirrors its mirror point
        const valid = recursiveHead.val === head.val;

        // Move the original linked list inward
        head = head.next;
        return next && valid;
    }
    return isPalindromRecursive(head);
};


var isPalindrome = function (head) {
    // Pass empty or single-item linked lists
    if (!head || !head.next) return true;

    // Traverse the linked list in order to find the mid-point (slow)
    let slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    slow.next = reverseLinkedList(slow.next);
    slow = slow.next;

    // Compare the original linked list with the reversed second half
    while (slow) {
        if (head.val !== slow.val) {
            // If a mismatch is detected, break out
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;
};

var reverseLinkedList = function (head) {
    let nextNode = null;
    let previousNode = null;
    while (head) {
        nextNode = head.next;
        head.next = previousNode;
        previousNode = head;
        head = nextNode;
    }
    return previousNode;
};