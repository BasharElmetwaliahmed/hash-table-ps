//Minimum Index Sum of Two Lists

class Solution {
public:
    vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
        map<string,int>hashmap;
        for(int i=0;i<list1.size();i++){
          hashmap[list1[i]]=i;
        }
        vector<string>result;
        int min=100000;
        for(int i=0;i<list2.size();i++)
        {
            if(hashmap.count(list2[i])){
            int sum=i+hashmap[list2[i]];
            if(sum<min){
                result.clear();
                result.push_back(list2[i]);
                min=sum;
            }
           else if(sum==min){
                result.push_back(list2[i]);
   
            }
            }

        }
        return result;
    }
};
