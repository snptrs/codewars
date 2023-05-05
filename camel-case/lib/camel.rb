def camelise(input)
  input.gsub(/([-_])(\w)/) { |match| match[1].upcase }
end