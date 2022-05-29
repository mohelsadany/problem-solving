#maximum-product-of-word-lengths 
#Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        words.sort(key=len, reverse=True)
        best, bitsets = 0, {}
        for i in range(len(words)):
            wlen, bitset = len(words[i]), 0
            if wlen * len(words[0]) < best:
                return best
            for c in words[i]:
                bitset |= 1 << ord(c) - 97
            if bitset not in bitsets:
                for k,v in bitsets.items():
                    if not bitset & k:
                        best = max(best, wlen * v)
                bitsets[bitset] = wlen
        return best