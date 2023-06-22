require 'camel'

describe 'camel' do
  it 'returns camelCase when passed "camel-case"' do
    expect(camelise("camel-case")).to eq "camelCase"
  end
  it 'returns camelCase when passed "camel_case"' do
    expect(camelise("camel_case")).to eq "camelCase"
  end
  it 'returns thisIsABigCamel when passed "this_is-a-big_camel"' do
    expect(camelise("this_is-a-big_camel")).to eq "thisIsABigCamel"
  end
end