/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length < 2) {
            return true;
        }

        for(let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i+1].start < intervals[i].end && intervals[i].start < intervals[i+1].end) return false;
        }
        return true;
    }
}
