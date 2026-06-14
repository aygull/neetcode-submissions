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
        let endVar = intervals[0].end;
        let startVar = intervals[1].start;
        for(let i = 0; i < intervals.length - 1; i++) {
            endVar = intervals[i].end;
            startVar = intervals[i+1].start;
            if (startVar < endVar && intervals[i].start < intervals[i+1].end) return false;
        }
        return true;
    }
}
