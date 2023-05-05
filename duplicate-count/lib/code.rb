def duplicate_count(text)
  dupes = 0
  text.downcase.split("").uniq.each { |i| dupes += 1 if text.downcase.count(i) > 1 }
  dupes
end
