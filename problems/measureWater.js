/**
 * @param {number[]} height
 * @return {number}
 */
    // want some recursive case to compare area
      // to make it efficient start at two furthest indecies
      // move either left index or right index inward, whichevers value is smaller to get linear time

      const maxArea = function(height) {
        // outer max area variable
        let maxWater = -Infinity;
    
        // recusive function should move inwards
        const measureBuckets = (i, j) => {
            // base case we've closed the window
            if (i === j) return;
        
            // do actual measuring
            maxWater = Math.max((Math.min(height[i], height[j]) * (j - i)), maxWater);
     
            // height[j] is smaller get next j index worth checking
            if (height[j] < height[i]){
              let nextJ = j - 1;
              while (height[nextJ] <= height[j] && nextJ > i) nextJ--;
              return measureBuckets(i, nextJ);
            } else {
              // height[i] is smaller find next i worth checking  
              let nextI = i + 1
              while (height[nextI] <= height[i] && nextI < j) nextI++;
              return measureBuckets(nextI, j);
            }
        }
    
        measureBuckets(0, height.length - 1);
        return maxWater;
    };
    
    // var maxArea = function(height) {
    //     // outer max area variable
    //     // curr area variable
    //     let maxWater = -Infinity;
    //     let currWater;
    
    //     // recusive function should move inwards
    //     const measureBuckets = (i, j) => {
    //         // base case we've closed the window
    //         if (i === j) return;
        
    //         // do actual measuring
    //         let width = j - i;
    //         let currHeight = Math.min(height[i], height[j])
    //         currWater = currHeight * width;
    //         maxWater = Math.max(currWater, maxWater);
     
    //         // height[j] is smaller get next j index worth checking
    //         if (height[j] < height[i]){
    //           let nextJ = j - 1;
    //           while (height[nextJ] <= height[j] && nextJ > i) nextJ--;
    //           return measureBuckets(i, nextJ);
    //         } else {
    //           // height[i] is smaller find next i worth checking  
    //           let nextI = i + 1
    //           while (height[nextI] <= height[i] && nextI < j) nextI++;
    //           return measureBuckets(nextI, j);
    //         }
    //     }
    
    //     measureBuckets(0, height.length - 1);
    //     return maxWater;
    // };
    
    // var maxArea = function(height) {
    //     // outer max area variable
    //     // curr area variable
    //     let maxWater = -Infinity;
    //     let currWater;
    
    //     // recusive function should move inwards
    //     const measureBuckets = (i, j) => {
    //         // base case we've iterated over entire array
    //         if (i === height.length - 1) return;
            
    //         // case if i and j are the same, there is no width increment i to next viable index
    //         if (i === j){
    //           let nextI = i + 1
    //           while (height[nextI] <= height[i] && nextI < height.length - 1) i++;
    //           return measureBuckets(nextI, height.length - 1);
    //         }
            
    //         // do actual measuring
    //         let width = j - i;
    //         let currHeight = Math.min(height[i], height[j])
    //         currWater = currHeight * width;
    //         maxWater = Math.max(currWater, maxWater);
     
    //         // get next j index worth checking
    //         let nextJ = j - 1;
    //         while (height[nextJ] <= height[j] && nextJ > i) nextJ--;
    
    //         return measureBuckets(i, nextJ);
    //     }
    
    //     measureBuckets(0, height.length - 1);
    //     return maxWater;
    // };