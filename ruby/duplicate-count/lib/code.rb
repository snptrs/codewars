def duplicate_count(text)
  dupes = 0
  text.downcase.split("").uniq.each { |i| dupes += 1 if text.downcase.count(i) > 1 }
  dupes
end

# This is an interesting solution. Don't really undersdtand what's going on with it
# [INVESTIGATE]
# def duplicate_count(text)
#   ('a'..'z').count { |c| text.downcase.count(c) > 1 }
# end

# Another good one
# Didn't realise you could apply count directly to an array or range
# def duplicate_count(text)
# 	arr = text.downcase.split("")
#   arr.uniq.count { |n| arr.count(n) > 1 }
# end
